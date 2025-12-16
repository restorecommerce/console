import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import {
  RcLayoutConfig,
  RcLayoutNavCategory,
  RcLayoutNavCategoryId,
  RcLayoutNavItem,
} from './main-layout-config.model';

@Injectable({ providedIn: 'root' })
export class RcLayoutFacade {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$ = this.breakpointObserver
    .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
    .pipe(
      map((state) => state.matches),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  private navItemsSubject = new BehaviorSubject<RcLayoutNavItem[]>([]);
  private categoriesSubject = new BehaviorSubject<RcLayoutNavCategory[]>([]);

  private navItems$ = this.navItemsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  private activeCategorySubject = new BehaviorSubject<RcLayoutNavCategoryId>(
    this.categoriesSubject.value[0]?.id ?? 'home',
  );

  activeCategory$ = this.activeCategorySubject.asObservable();

  visibleNavItems$ = combineLatest([
    this.navItems$,
    this.activeCategory$,
    this.categories$,
  ]).pipe(
    map(([items, activeCategory, categories]) => {
      const defaultCategoryId = categories[0]?.id;
      return items.filter((item) => {
        const id = item.categoryId ?? defaultCategoryId;
        return id === activeCategory;
      });
    }),
  );

  /** Called by the shell once it has the config */
  initConfig(config: RcLayoutConfig): void {
    const navItems = config.navItems ?? [];
    const categories =
      config.categories && config.categories.length
        ? config.categories
        : [{ id: 'home', label: 'Home' }];

    this.navItemsSubject.next(navItems);
    this.categoriesSubject.next(categories);

    // reset active category if needed
    const firstId = categories[0]?.id ?? 'home';
    this.activeCategorySubject.next(firstId);
  }

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  setNavItems(items: RcLayoutNavItem[]): void {
    this.navItemsSubject.next(items);
  }

  setActiveCategory(id: RcLayoutNavCategoryId): void {
    this.activeCategorySubject.next(id);
  }
}
