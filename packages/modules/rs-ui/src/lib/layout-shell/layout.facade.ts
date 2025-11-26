// layout.facade.ts
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LayoutNavItem, OrgContextOption } from './layout-config.model';
import { LAYOUT_CONFIG } from './layout.tokens';

@Injectable({ providedIn: 'root' })
export class LayoutFacade {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  private activeOrgSubject = new BehaviorSubject<OrgContextOption | null>(null);
  activeOrg$ = this.activeOrgSubject.asObservable();

  private config = inject(LAYOUT_CONFIG, { optional: false });

  private navItemsSubject = new BehaviorSubject<LayoutNavItem[]>(
    this.config.navItems ?? []
  );

  visibleNavItems$ = this.navItemsSubject.asObservable();

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  setActiveOrg(org: OrgContextOption) {
    this.activeOrgSubject.next(org);
    // Optionally emit some event or call a callback
  }

  setNavItems(items: LayoutNavItem[]): void {
    this.navItemsSubject.next(items);
  }
}
