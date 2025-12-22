import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RcLayoutShellComponent } from '@console/rc-ui';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  startWith,
} from 'rxjs';

import { ORG_QUERY_PARAM_KEY } from '@console-core/config';
import { AccountFacade, OrganizationContextFacade } from '@console-core/state';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    @if (vm$ | async; as vm) {
    <rc-layout-shell
      [user]="vm.user"
      [selectedOrganizationId]="vm.selectedOrganizationId"
      [organizations]="vm.organizations"
      (organizationSelected)="onHandleSelectedOrganization($event)"
      (accountAction)="onAccountAction($event)"
      (searchChange)="onSearch($event)"
    >
      <router-outlet />
    </rc-layout-shell>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, AsyncPipe, RcLayoutShellComponent],
})
export class PrivateTemplateComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly router = inject(Router);
  private readonly accountFacade = inject(AccountFacade);
  private readonly organizationContextFacade = inject(
    OrganizationContextFacade
  );

  private readonly orgQueryParamKey = inject(ORG_QUERY_PARAM_KEY);

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    organizations: this.organizationContextFacade.all$,
    selectedOrganizationId: this.organizationContextFacade.selectedId$,
  });

  ngOnInit(): void {
    // Change organization merges the route with the query param (?org=orgId)
    this.organizationContextFacade.read({});

    const urlOrgId$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      startWith(null), // read initial URL too
      map(
        () => this.route.snapshot.queryParamMap.get(this.orgQueryParamKey) ?? ''
      ),
      distinctUntilChanged()
    );

    combineLatest({
      organizations: this.organizationContextFacade.all$,
      selectedId: this.organizationContextFacade.selectedId$,
      urlOrgId: urlOrgId$,
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ organizations, selectedId, urlOrgId }) => {
        if (!organizations?.length) return;

        const exists = (id: string) => organizations.some((o) => o.id === id);

        // 1) URL has org and it's valid -> ensure facade matches it
        if (urlOrgId && exists(urlOrgId)) {
          if (selectedId !== urlOrgId) {
            this.organizationContextFacade.setSelectedOrganizationId(urlOrgId);
          }
          return;
        }

        // 2) URL missing/invalid, but facade has a valid selection -> write it to URL
        if (selectedId && exists(selectedId)) {
          this.setOrgInUrl(selectedId, true);
          return;
        }

        // 3) Neither URL nor facade has a valid selection -> pick a default
        const defaultId = organizations[0].id;
        this.organizationContextFacade.setSelectedOrganizationId(defaultId);
        this.setOrgInUrl(defaultId, true);
      });
  }

  onHandleSelectedOrganization(orgId: string) {
    this.setOrgInUrl(orgId, true);
  }

  onAccountAction(action: 'profile' | 'preferences' | 'sign-out') {
    if (action === 'sign-out') {
      this.router.navigate(['/auth']);
      // handle sign out...
    } else if (action === 'profile') {
      // Go to the profile page...
    } else if (action === 'preferences') {
      // Go to the preference page....
    }
  }

  onSearch(_: string) {
    // Filter organizations...
  }

  private setOrgInUrl(orgId: string, replaceUrl = false) {
    const current = this.route.snapshot.queryParamMap.get(
      this.orgQueryParamKey
    );
    if (current === orgId) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [this.orgQueryParamKey]: orgId },
      queryParamsHandling: 'merge',
      replaceUrl,
    });
  }
}
