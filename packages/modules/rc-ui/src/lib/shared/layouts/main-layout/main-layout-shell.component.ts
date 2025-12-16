import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
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
} from './main-layout-config.model';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
import {
  RcBannerComponent,
  RcBreadcrumbComponent,
  RcCategorySelectComponent,
} from '../../patterns';
import { RcHeaderToolbarComponent } from '../header-toolbar';

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
  private route = inject(ActivatedRoute);
  public facade = inject(RcLayoutFacade);
  public readonly config = inject(RC_LAYOUT_CONFIG, { optional: false });

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.facade.initConfig(this.config);

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        // TODO Will revisit this later
        // this.syncCategoryWithUrl(e.urlAfterRedirects);
      });
  }

  isHandset$ = this.facade.isHandset$;

  collapsed$ = this.facade.collapsed$;
  categories$ = this.facade.categories$;
  activeCategory$ = this.facade.activeCategory$;
  visibleNavItems$ = this.facade.visibleNavItems$;

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

  private getFirstNavItemForCategory(
    id: RcLayoutNavCategoryId,
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
