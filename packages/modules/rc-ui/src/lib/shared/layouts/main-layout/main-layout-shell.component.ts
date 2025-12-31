import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

import {
  VCLButtonModule,
  VCLDrawerModule,
  VCLFormControlGroupModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLInputModule,
  VCLNavigationModule,
} from '@vcl/ng-vcl';

import {
  RcLayoutNavCategoryId,
  RcLayoutNavItem,
  RcTranslatable,
} from './main-layout-config.model';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
import {
  RcBannerComponent,
  RcBreadcrumbComponent,
  RcCategorySelectComponent,
} from '../../patterns';
import {
  RcHeaderOrganization,
  RcHeaderToolbarComponent,
  RcHeaderUser,
} from '../header-toolbar';
import { RC_TRANSLATE } from '../../../i18n/i18n.tokens';

@Component({
  selector: 'rc-layout-shell',
  templateUrl: './main-layout-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './main-layout-shell.component.scss',
  imports: [
    AsyncPipe,
    RouterModule,
    VCLDrawerModule,
    VCLNavigationModule,
    VCLIcogramModule,
    RcCategorySelectComponent,
    VCLIconModule,
    VCLInputModule,
    VCLButtonModule,
    RcBreadcrumbComponent,
    RcBannerComponent,
    VCLFormControlGroupModule,
    CommonModule,
    RcHeaderToolbarComponent,
  ],
})
export class RcLayoutShellComponent {
  private router = inject(Router);
  public facade = inject(RcLayoutFacade);
  public readonly config = inject(RC_LAYOUT_CONFIG, { optional: false });
  private readonly t = inject(RC_TRANSLATE, { optional: false });

  @Input() user: RcHeaderUser | null = {
    id: 'user-1',
    fullName: 'Bello Babakolo',
    email: 'bello.babakolo@example.com',
  };

  @Input() organizations: RcHeaderOrganization[] = [
    {
      id: 'org-nfuse',
      name: 'n-fuse GmbH',
      description: 'IoT & E-commerce platform',
    },
    {
      id: 'org-fieldmorph',
      name: 'FieldMorph',
      description: 'Field operations & asset tracking',
    },
    {
      id: 'org-bells',
      name: 'Bells Transport',
      description: 'Bus ticketing & logistics',
    },
  ];

  @Input() selectedOrganizationId: string | null = null;

  @Input() showProfile = true;
  @Input() showPreferences = true;
  @Input() showSignOut = true;

  @Output() organizationSelected = new EventEmitter<string>();
  @Output() accountAction = new EventEmitter<
    'profile' | 'preferences' | 'sign-out'
  >();

  @Output() searchChange = new EventEmitter<string>();

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

  isHandset$ = this.facade.isHandset$;

  collapsed$ = this.facade.collapsed$;
  categories$ = this.facade.categories$;
  activeCategory$ = this.facade.activeCategory$;
  visibleNavItems$ = this.facade.visibleNavItems$;

  label$(v: RcTranslatable) {
    return this.t(v);
  }

  navigate(item: RcLayoutNavItem) {
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

  onSelectCategory(id: RcLayoutNavCategoryId): void {
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

  onSearchChange(term: string): void {
    this.searchChange.emit(term);
  }

  onSelectOrganization(id: string): void {
    this.organizationSelected.emit(id);
  }

  onAccountItemSelected(value: string): void {
    if (
      value === 'profile' ||
      value === 'preferences' ||
      value === 'sign-out'
    ) {
      this.accountAction.emit(value);
    }
  }

  private getFirstNavItemForCategory(
    id: RcLayoutNavCategoryId
  ): RcLayoutNavItem | undefined {
    const flat = this.flattenNavItems(this.config.navItems);
    const defaultCategoryId = this.config.categories?.[0]?.id;

    return flat.find((item) => {
      const cid = item.categoryId ?? defaultCategoryId;
      return cid === id && (item.route || item.children?.some((c) => c.route));
    });
  }

  private flattenNavItems(items: RcLayoutNavItem[]): RcLayoutNavItem[] {
    const out: RcLayoutNavItem[] = [];
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
}
