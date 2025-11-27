// layout.facade.ts
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import {
  LayoutNavCategory,
  LayoutNavCategoryId,
  LayoutNavItem,
} from './layout-config.model';
import { LAYOUT_CONFIG } from './layout.tokens';

@Injectable({ providedIn: 'root' })
export class LayoutFacade {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  private config = inject(LAYOUT_CONFIG, { optional: false });

  private navItemsSubject = new BehaviorSubject<LayoutNavItem[]>(
    this.config.navItems ?? []
  );

  private navItems$ = this.navItemsSubject.asObservable();

  private categoriesSubject = new BehaviorSubject<LayoutNavCategory[]>(
    this.config.categories && this.config.categories.length
      ? this.config.categories
      : [{ id: 'home', label: 'Home' }]
  );

  categories$ = this.categoriesSubject.asObservable();

  private activeCategorySubject = new BehaviorSubject<LayoutNavCategoryId>(
    this.categoriesSubject.value[0]?.id ?? 'home'
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
    })
  );

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  setNavItems(items: LayoutNavItem[]): void {
    this.navItemsSubject.next(items);
  }

  setActiveCategory(id: LayoutNavCategoryId): void {
    this.activeCategorySubject.next(id);
  }
}
