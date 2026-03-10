import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { map } from 'rxjs';

import {
  VCLButtonModule,
  VCLDrawerModule,
  VCLFormControlGroupModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLInputModule,
  VCLNavigationModule,
} from '@vcl/ng-vcl';

import { RC_TRANSLATE } from '../../../i18n/i18n.tokens';
import { RcBannerComponent, RcBreadcrumbComponent } from '../../patterns';
import {
  RcHeaderOrganization,
  RcHeaderToolbarComponent,
  RcHeaderUser,
} from '../header-toolbar';

import {
  RcLayoutNavItem,
  RcTranslatable,
  ShellFooterConfig,
} from './main-layout-config.model';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';

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

  @Input() user: RcHeaderUser | null = null;

  @Input() organizations: RcHeaderOrganization[] = [];

  @Input() selectedOrganizationId: string | null = null;

  @Input() showProfile = true;
  @Input() showPreferences = true;
  @Input() showSignOut = true;

  @Output() organizationSelected = new EventEmitter<string>();
  @Output() accountAction = new EventEmitter<
    'profile' | 'preferences' | 'sign-out'
  >();

  @Output() searchChange = new EventEmitter<string>();

  readonly defaultOpenIcon = 'mdi mdi-page-layout-sidebar-left';
  readonly defaultCloseIcon = 'mdi mdi-page-layout-sidebar-right';

  constructor() {
    this.facade.initConfig(this.config);
  }

  isHandset$ = this.facade.isHandset$;

  collapsed$ = this.facade.collapsed$;
  categories$ = this.facade.categories$;

  icon$ = this.collapsed$.pipe(
    map((collapsed) =>
      collapsed
        ? (this.config.sidebarToggle?.closeIcon ?? this.defaultCloseIcon)
        : (this.config.sidebarToggle?.openIcon ?? this.defaultOpenIcon)
    )
  );

  iconClass = this.config.sidebarToggle?.iconClass ?? 'scale155p';

  readonly defaultFooterConfig: Required<ShellFooterConfig> = {
    enabled: true,
    text: 'All rights reserved.',
    companyName: '',
    companyUrl: '',
    showYear: true,
    year: new Date().getFullYear(),
  };

  footerConfig = {
    ...this.defaultFooterConfig,
    ...this.config.footer,
  };

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
}
