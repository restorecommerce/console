// layout.facade.ts
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LayoutNavItem, OrgContextOption } from './layout-config.model';
import { LAYOUT_CONFIG, ORG_CONTEXT_OPTIONS } from './layout.tokens';

@Injectable({ providedIn: 'root' })
export class LayoutFacade {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  private activeOrgSubject = new BehaviorSubject<OrgContextOption | null>(null);
  activeOrg$ = this.activeOrgSubject.asObservable();

  private navItemsSubject!: BehaviorSubject<LayoutNavItem[]>;

  private orgs = inject(ORG_CONTEXT_OPTIONS, { optional: false });
  private config = inject(LAYOUT_CONFIG, { optional: false });

  visibleNavItems$ = this.navItemsSubject$;

  constructor() {
    this.navItemsSubject = new BehaviorSubject<LayoutNavItem[]>(
      this.config.navItems ?? []
    );

    if (this.orgs?.length) {
      this.activeOrgSubject.next(this.orgs[0]);
    }
  }

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

  private get navItemsSubject$() {
    return this.navItemsSubject.asObservable();
  }
}
