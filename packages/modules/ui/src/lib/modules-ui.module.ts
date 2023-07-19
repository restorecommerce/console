import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  VCLAlertModule,
  VCLIcogramModule,
  VCLLayerModule,
  VCLNotifierModule,
  VCLOffClickModule,
  VCLSelectModule,
  VCLJssFormModule,
  VCLNavigationModule,
  VCLButtonModule,
  VCLIconModule,
  VCLBusyIndicatorModule,
  VCLPopoverModule,
  VCLInputModule,
  VCLDrawerModule,
  VCLFormControlGroupModule,
} from '@vcl/ng-vcl';

import { RcCopyrightComponent } from './components/atoms/copyright/copyright.component';
import { RcAppComponent } from './components/organisms/app/app.component';
import { RcPasswordRecoveryComponent } from './components/organisms/authn/password-recovery/password-recovery.component';
import { RcSignInComponent } from './components/organisms/authn/sign-in/sign-in.component';
import { RcSignUpComponent } from './components/organisms/authn/sign-up/sign-up.component';
import {
  RcDataListItemComponent,
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
} from './components/organisms/datalist/datalist-item.component';
import { RcDataListComponent } from './components/organisms/datalist/datalist.component';
import { RcDrawerNavigationItemComponent } from './components/organisms/drawer/drawer-navigation-item.component';
import { RcDrawerNavigationComponent } from './components/organisms/drawer/drawer-navigation.component';
import { RcRowDirective } from './components/organisms/flex-grid/flex-grid.directive';
import { RcBannerComponent } from './components/organisms/header/banner.component';
import { RcHeaderNavigationItemComponent } from './components/organisms/header/header-navigation-item.component';
import { RcHeaderNavigationComponent } from './components/organisms/header/header-navigation.component';
import { RcHeaderToolbarComponent } from './components/organisms/header/header-toolbar.component';
import { RcHeaderComponent } from './components/organisms/header/header.component';
import { RcToggleDrawerComponent } from './components/organisms/toggle-drawer.component';
import { RcSearchBarComponent } from './components/organisms/toolbar/searchbar.component';
import { RcToolbarComponent } from './components/organisms/toolbar/toolbar.component';
import { RcPagePasswordRecoveryComponent } from './components/pages/authn/page-password-recovery/page-password-recovery.component';
import { RcPageSignInComponent } from './components/pages/authn/page-sign-in/page-sign-in.component';
import { RcPageSignUpComponent } from './components/pages/authn/page-sign-up/page-sign-up.component';
import { RcPageHomeComponent } from './components/pages/page-home/page-home.component';
import { RcPageLayoutComponent } from './components/pages/page-layout/page-layout.component';
import { RcPageOverflowComponent } from './components/pages/page-overflow/page-overflow.component';
import { RcPrivateTemplateComponent } from './components/templates/private/private-template.component';
import { RcPublicTemplateComponent } from './components/templates/public/public-template.component';

export const RC_MODULE_CONFIG_TOKEN = new InjectionToken('rc.module.config');
export const RC_MODULE_STATE_TOKEN = new InjectionToken('rc.module.state');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UiComponentsConfig {}

const atoms = [RcCopyrightComponent];

// const molecules = [];

const organisms = [
  RcAppComponent,
  RcHeaderComponent,
  RcHeaderToolbarComponent,
  RcBannerComponent,
  RcDrawerNavigationComponent,
  RcDrawerNavigationItemComponent,
  RcHeaderNavigationItemComponent,
  RcHeaderNavigationComponent,
  RcRowDirective,
  RcDataListComponent,
  RcDataListItemComponent,
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
  RcToolbarComponent,
  RcSearchBarComponent,
  RcToggleDrawerComponent,
  RcSignInComponent,
  RcSignUpComponent,
  RcPasswordRecoveryComponent,
];

const pages = [
  RcPageHomeComponent,
  RcPageLayoutComponent,
  RcPageOverflowComponent,
  RcPageSignInComponent,
  RcPageSignUpComponent,
  RcPagePasswordRecoveryComponent,
];

const templates = [RcPublicTemplateComponent, RcPrivateTemplateComponent];

// const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PortalModule,
    VCLAlertModule,
    VCLIcogramModule,
    VCLLayerModule,
    VCLNotifierModule,
    VCLOffClickModule,
    VCLSelectModule,
    VCLJssFormModule,
    VCLNavigationModule,
    VCLButtonModule,
    VCLIconModule,
    VCLBusyIndicatorModule,
    VCLPopoverModule,
    VCLInputModule,
    VCLDrawerModule,
    VCLFormControlGroupModule,
  ],
  declarations: [
    ...atoms,
    // ...molecules,
    ...organisms,
    ...pages,
    ...templates,
    // ...pipes,
  ],
  exports: [
    ...atoms,
    // ...molecules,
    ...organisms,
    ...pages,
    ...templates,
    // ...pipes,
  ],
})
export class ModulesUiModule {
  static forRoot(
    config: UiComponentsConfig = {}
  ): ModuleWithProviders<ModulesUiModule> {
    return {
      ngModule: ModulesUiModule,
      providers: [
        {
          provide: RC_MODULE_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }

  static forChild(
    config: UiComponentsConfig = {}
  ): ModuleWithProviders<ModulesUiModule> {
    return {
      ngModule: ModulesUiModule,
      providers: [
        {
          provide: RC_MODULE_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
