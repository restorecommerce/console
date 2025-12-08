import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { combineLatest, distinctUntilChanged, filter, map, take } from 'rxjs';

import {
  VCLButtonModule,
  VCLDrawerModule,
  VCLFormControlGroupModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLInputModule,
  VCLNavigationModule,
} from '@vcl/ng-vcl';

import { RsBreadcrumbComponent } from '../breadcrum/breadcrum.component';
import { RsCategorySelectComponent } from '../category-select/category-select.component';
import { RsHeaderOrganization, RsHeaderToolbarComponent } from '../header';
import {
  LAYOUT_ACCOUNT_ACTION_HANDLER,
  LAYOUT_ORGS$,
  LAYOUT_SELECTED_ORG_ID$,
  LAYOUT_SET_SELECTED_ORG,
  LAYOUT_USER$,
} from '../header/header-toolbar.tokens';
import { RsBannerComponent } from '../header-brand';

import { LayoutNavCategoryId, LayoutNavItem } from './layout-config.model';
import { LayoutFacade } from './layout.facade';
import { LAYOUT_CONFIG } from './layout.tokens';

@Component({
  selector: 'rs-layout-shell',
  templateUrl: './layout-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './layout-shell.component.scss',
  imports: [
    AsyncPipe,
    RouterModule,
    VCLDrawerModule,
    VCLNavigationModule,
    VCLIcogramModule,
    RsCategorySelectComponent,
    VCLIconModule,
    VCLInputModule,
    VCLButtonModule,
    RsBreadcrumbComponent,
    RsHeaderToolbarComponent,
    RsBannerComponent,
    VCLFormControlGroupModule,
  ],
})
export class LayoutShellComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public facade = inject(LayoutFacade);
  public readonly config = inject(LAYOUT_CONFIG, { optional: false });
  private readonly preferenceHandler = inject(LAYOUT_ACCOUNT_ACTION_HANDLER, {
    optional: false,
  });
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.facade.initConfig(this.config);

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((e) => {
        this.syncCategoryWithUrl(e.urlAfterRedirects);
      });
  }

  ngOnInit(): void {
    const orgFromUrl$ = this.route.queryParamMap.pipe(
      map((params) => params.get('org')),
      distinctUntilChanged()
    );

    orgFromUrl$
      .pipe(filter((orgId): orgId is string => !!orgId))
      .subscribe((orgId) => {
        this.setSelectedOrg(orgId);
      });

    combineLatest([orgFromUrl$, this.orgs$])
      .pipe(take(1))
      .subscribe(([orgId, orgs]) => {
        if (!orgId && orgs.length) {
          const defaultId = this.pickDefaultOrgId(orgs);
          this.navigateWithOrg(defaultId);
        }
      });
  }

  isHandset$ = this.facade.isHandset$;

  readonly accountHandler = inject(LAYOUT_ACCOUNT_ACTION_HANDLER, {
    optional: false,
  });
  readonly setSelectedOrg = inject(LAYOUT_SET_SELECTED_ORG, {
    optional: false,
  });
  readonly selectedOrgId$ = inject(LAYOUT_SELECTED_ORG_ID$, {
    optional: false,
  });
  readonly orgs$ = inject(LAYOUT_ORGS$, { optional: false });

  readonly user$ = inject(LAYOUT_USER$, { optional: false });

  @Output() accountAction = new EventEmitter<
    'profile' | 'preferences' | 'sign-out'
  >();

  collapsed$ = this.facade.collapsed$;
  categories$ = this.facade.categories$;
  activeCategory$ = this.facade.activeCategory$;
  visibleNavItems$ = this.facade.visibleNavItems$;

  navigate(item: LayoutNavItem) {
    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank');
      return;
    }
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  onToggleSidebar(isHandset: boolean | null): void {
    if (isHandset) {
      this.toggleSidebar();
    }
  }

  toggleSidebar() {
    this.facade.toggleSidebar();
  }

  onOrgSelected(orgId: string): void {
    this.setSelectedOrg(orgId);
  }

  onAccountAction(action: 'profile' | 'preferences' | 'sign-out'): void {
    this.accountAction.emit(action);
    this.preferenceHandler(action);
  }

  onSelectCategory(id: LayoutNavCategoryId): void {
    this.facade.setActiveCategory(id);

    const category = this.config.categories?.find((c) => c.id === id);
    let target = category?.defaultRoute;

    if (!target) {
      const first = this.getFirstNavItemForCategory(id);
      if (first) {
        target = first.route ?? first.children?.[0]?.route;
      }
    }

    if (!target) {
      return;
    }

    if (Array.isArray(target)) {
      this.router.navigate(target);
    } else {
      this.router.navigate([target]);
    }
  }

  private getFirstNavItemForCategory(
    id: LayoutNavCategoryId
  ): LayoutNavItem | undefined {
    const flat = this.flattenNavItems(this.config.navItems);
    const defaultCategoryId = this.config.categories?.[0]?.id;

    return flat.find((item) => {
      const cid = item.categoryId ?? defaultCategoryId;
      return cid === id && (item.route || item.children?.some((c) => c.route));
    });
  }

  private flattenNavItems(items: LayoutNavItem[]): LayoutNavItem[] {
    const out: LayoutNavItem[] = [];
    for (const item of items) {
      out.push(item);
      if (item.children?.length) {
        out.push(...this.flattenNavItems(item.children));
      }
    }
    return out;
  }

  private syncCategoryWithUrl(url: string): void {
    const flat = this.flattenNavItems(this.config.navItems);
    const defaultCategoryId = this.config.categories?.[0]?.id;

    const match = flat.find((item) => this.routeMatchesUrl(item.route, url));

    if (!match) {
      return;
    }

    const categoryId = match.categoryId ?? defaultCategoryId;
    if (!categoryId) {
      return;
    }

    this.facade.setActiveCategory(categoryId);
  }

  private routeMatchesUrl(route: string | undefined, url: string): boolean {
    if (!route) return false;

    let path: string;
    if (Array.isArray(route)) {
      path = this.router.createUrlTree(route).toString();
    } else {
      path = this.router.createUrlTree([route]).toString();
    }

    return url === path || url.startsWith(path + '/');
  }

  onOrgChanged(orgId: string): void {
    this.navigateWithOrg(orgId);
  }

  private navigateWithOrg(orgId: string): void {
    // We ONLY change the URL here.
    // The subscription in ngOnInit will push it into OrgContext.
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { org: orgId },
      queryParamsHandling: 'merge',
    });
  }

  private pickDefaultOrgId(orgs: RsHeaderOrganization[]): string {
    return orgs[0].id;
  }
}
