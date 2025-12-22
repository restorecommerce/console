import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RcLayoutShellComponent } from '@console/rc-ui';
import { combineLatest } from 'rxjs';

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
  private readonly router = inject(Router);
  private readonly accountFacade = inject(AccountFacade);
  private readonly organizationContextFacade = inject(
    OrganizationContextFacade
  );

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    organizations: this.organizationContextFacade.all$,
    selectedOrganizationId: this.organizationContextFacade.selectedId$,
  });

  ngOnInit(): void {
    this.organizationContextFacade.read({});
  }

  onHandleSelectedOrganization(orgId: string) {
    this.organizationContextFacade.setSelectedOrganizationId(orgId);
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
    // const q = (term ?? '').trim().toLowerCase();
    // if (!q) {
    //   this.organizations = [...this.organizations];
    //   return;
    // }
    // this.organizations = this.organizations.filter((org) => {
    //   const haystack = `${org.name} ${org.id} ${
    //     org.description ?? ''
    //   }`.toLowerCase();
    //   return haystack.includes(q);
    // });
  }
}
