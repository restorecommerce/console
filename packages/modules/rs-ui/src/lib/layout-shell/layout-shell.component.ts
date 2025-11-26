import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import {
  VCLButtonModule,
  VCLDrawerModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLNavigationModule,
} from '@vcl/ng-vcl';

import { RsBreadcrumbComponent } from '../breadcrum/breadcrum.component';
import { RsHeaderToolbarComponent } from '../header';
import {
  LAYOUT_ACCOUNT_ACTION_HANDLER,
  LAYOUT_ORGS$,
  LAYOUT_SELECTED_ORG_ID$,
  LAYOUT_SET_SELECTED_ORG,
  LAYOUT_USER$,
} from '../header/header-toolbar.tokens';
import { RsBannerComponent } from '../header-brand';

import { LayoutNavItem } from './layout-config.model';
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
    VCLIconModule,
    VCLButtonModule,
    RsBreadcrumbComponent,
    RsHeaderToolbarComponent,
    RsBannerComponent,
  ],
})
export class LayoutShellComponent {
  private router = inject(Router);
  public facade = inject(LayoutFacade);
  public readonly config = inject(LAYOUT_CONFIG, { optional: false });

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
  activeOrg$ = this.facade.activeOrg$;

  navigate(item: LayoutNavItem) {
    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank');
      return;
    }
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  toggleSidebar() {
    this.facade.toggleSidebar();
  }

  onOrgSelected(orgId: string): void {
    this.setSelectedOrg(orgId);
  }

  onAccountAction(action: 'profile' | 'preferences' | 'sign-out'): void {
    // For generic shell lib: bubble this up to host via an @Output
    this.accountAction.emit(action);
  }
}
