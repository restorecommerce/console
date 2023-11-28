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
  RcMetaComponent,
  RcSearchbarComponent,
  RcToolbarComponent,
  RcAccountConfirmEmailComponent,
  RcConfirmPasswordComponent,
  RcPersonalDataComponent,
  RcAccountDataComponent,
  RcAccountInformationComponent,
  RcAccountDeletionComponent,
  RcLocalizationDataComponent,
  RcPageHeaderComponent,
  RcCrudMainComponent,
  RcCrudViewComponent,
  RcCrudCreateComponent,
  RcCrudEditComponent,
  RcCountryViewComponent,
  RcCountryCreateComponent,
  RcCountryEditComponent,
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
  RcPageManagementComponent,
  RcPageAccountComponent,
} from './components/pages';
import {
  RcPrivateTemplateComponent,
  RcPublicTemplateComponent,
} from './components/templates';
import { HighlightPipe } from './pipes';

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
  RcMetaComponent,
  RcSearchbarComponent,
  RcToolbarComponent,
  RcToggleDrawerComponent,
  RcSignInComponent,
  RcSignUpComponent,
  RcPasswordRecoveryComponent,
  RcAccountConfirmEmailComponent,
  RcConfirmPasswordComponent,
  RcPersonalDataComponent,
  RcAccountDataComponent,
  RcAccountInformationComponent,
  RcAccountDeletionComponent,
  RcLocalizationDataComponent,
  RcPageHeaderComponent,
  RcCrudMainComponent,
  RcCrudViewComponent,
  RcCrudCreateComponent,
  RcCrudEditComponent,
  RcCountryViewComponent,
  RcCountryCreateComponent,
  RcCountryEditComponent,
];

const pages = [
  RcPageHomeComponent,
  RcPageLayoutComponent,
  RcPageOverflowComponent,
  RcPageManagementComponent,
  RcPageActivationComponent,
  RcPageConfirmPasswordComponent,
  RcPageSignInComponent,
  RcPageSignUpComponent,
  RcPageSignOutComponent,
  RcPagePasswordRecoveryComponent,
  RcPageAccountComponent,
];

const templates = [RcPublicTemplateComponent, RcPrivateTemplateComponent];

const pipes = [HighlightPipe];

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
    ...pipes,
  ],
  exports: [
    ...atoms,
    // ...molecules,
    ...organisms,
    ...pages,
    ...templates,
    ...pipes,
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
