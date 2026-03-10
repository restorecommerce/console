import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

import { VCLBreakpoints } from '@vcl/ng-vcl';

import {
  RcLayoutConfig,
  RcLayoutNavCategory,
  RcLayoutNavItem,
} from './main-layout-config.model';

@Injectable({ providedIn: 'root' })
export class RcLayoutFacade {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$ = this.breakpointObserver
    .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
    .pipe(
      map((state) => state.matches),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  private navItemsSubject = new BehaviorSubject<RcLayoutNavItem[]>([]);
  private categoriesSubject = new BehaviorSubject<RcLayoutNavCategory[]>([]);

  categories$ = this.categoriesSubject.asObservable();

  /** Called by the shell once it has the config */
  initConfig(config: RcLayoutConfig): void {
    const navItems = config.navItems ?? [];
    const categories =
      config.categories && config.categories.length
        ? config.categories
        : [{ id: 'home', label: 'Home' }];

    this.navItemsSubject.next(navItems);
    this.categoriesSubject.next(categories);
  }

  getItemsByCategory(categoryId: string): RcLayoutNavItem[] {
    return this.navItemsSubject.value.filter(
      (item) => item.categoryId === categoryId && !item.isHidden
    );
  }

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  setNavItems(items: RcLayoutNavItem[]): void {
    this.navItemsSubject.next(items);
  }
}
