import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
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
  VCLPasswordInputModule,
  VCLDrawerModule,
  VCLFormControlGroupModule,
} from '@vcl/ng-vcl';

import {
  RcSubmitButtonComponent,
  RcCopyrightComponent,
} from './components/atoms';
import {
  RcAppComponent,
  RcSignUpComponent,
  RcPasswordRecoveryComponent,
  RcSignInComponent,
  RcDataListItemComponent,
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
  RcDataListComponent,
  RcDrawerNavigationItemComponent,
  RcDrawerNavigationComponent,
  RcRowDirective,
  RcBannerComponent,
  RcHeaderNavigationItemComponent,
  RcHeaderNavigationComponent,
  RcHeaderToolbarComponent,
  RcHeaderComponent,
  RcToggleDrawerComponent,
  RcSearchBarComponent,
  RcToolbarComponent,
  RcConfirmPasswordComponent,
  RcPersonalDataComponent,
  RcAccountDataComponent,
  RcAccountInformationComponent,
  RcAccountDeletionComponent,
} from './components/organisms';
import {
  RcPageConfirmPasswordComponent,
  RcPageActivationComponent,
  RcPagePasswordRecoveryComponent,
  RcPageSignInComponent,
  RcPageSignOutComponent,
  RcPageSignUpComponent,
  RcPageHomeComponent,
  RcPageLayoutComponent,
  RcPageOverflowComponent,
  RcPageAccountComponent,
  RcPageProfileComponent,
  RcPagePreferencesComponent,
} from './components/pages';
import {
  RcPrivateTemplateComponent,
  RcPublicTemplateComponent,
} from './components/templates';

export const RC_MODULE_CONFIG_TOKEN = new InjectionToken('rc.module.config');
export const RC_MODULE_STATE_TOKEN = new InjectionToken('rc.module.state');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UiComponentsConfig {}

const atoms = [RcCopyrightComponent, RcSubmitButtonComponent];

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
  RcConfirmPasswordComponent,
  RcPersonalDataComponent,
  RcAccountDataComponent,
  RcAccountInformationComponent,
  RcAccountDeletionComponent,
];

const pages = [
  RcPageHomeComponent,
  RcPageLayoutComponent,
  RcPageOverflowComponent,
  RcPageActivationComponent,
  RcPageConfirmPasswordComponent,
  RcPageSignInComponent,
  RcPageSignUpComponent,
  RcPageSignOutComponent,
  RcPagePasswordRecoveryComponent,
  RcPageAccountComponent,
  RcPageProfileComponent,
  RcPagePreferencesComponent,
];

const templates = [RcPublicTemplateComponent, RcPrivateTemplateComponent];

// const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
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
    VCLPasswordInputModule,
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
