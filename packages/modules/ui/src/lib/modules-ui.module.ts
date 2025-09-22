import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {
  ScrollingModule,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
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
  VCLDataListModule,
  VCLPanelModule,
  VCLCheckboxModule,
  VCLButtonGroupModule,
  VCLBadgeModule,
  VCLGalleryModule,
  VCLFileInputModule,
  VCLRadioButtonModule,
} from '@vcl/ng-vcl';

import { ModulesSharedModule } from '@console-modules/shared';

import {
  RcBusyIndicatorComponent,
  RcCopyrightComponent,
  RcNoRecordsComponent,
  RcScrollableContainerComponent,
  RcSubmitButtonComponent,
  RcPopoverActionComponent,
  RCBadgeComponent,
  RCHeading1Component,
} from './components/atoms';
import {
  RcOrderInfoComponent,
  RcOrderItemsComponent,
  RcOrderTotalsComponent,
  RcOrderAddressComponent,
  RcShopInfoComponent,
  RcProductDetailsComponent,
  RcProductVariantComponent,
  RcProductVariantsComponent,
  RcProductImagesComponent,
  RcCardComponent,
} from './components/molecules';
import { RcOrderItemComponent } from './components/molecules/order-items/order-item.component';
import { RcProductTemplateComponent } from './components/molecules/product-templates/product-template.component';
import { RcProductTemplatesComponent } from './components/molecules/product-templates/product-templates.component';
import { RcRoleAssociationComponent } from './components/molecules/roles-associations/role-association.component';
import { RcRolesAssociationsComponent } from './components/molecules/roles-associations/roles-associations.component';
import {
  RcAppComponent,
  RcSignUpComponent,
  RcPasswordRecoveryComponent,
  RcSignInComponent,
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
  RcDataListProductComponent,
  RcDataListKeyValueComponent,
  RcDataListKeyValueWithBracketsComponent,
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
  RcCrudCreateComponent,
  RcCrudEditComponent,
  RcProductViewComponent,
  JSONEditorComponent,
  RcDataListFulfilmentComponent,
  FilterSortCardComponent,
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
  RcPageOrderComponent,
} from './components/pages';
import {
  RcPrivateTemplateComponent,
  RcPublicTemplateComponent,
} from './components/templates';
import { HighlightPipe, ProductImagePipe } from './pipes';
import { AppendBucketDomainPipe } from './pipes/append-bucket-domain.pipe';

export const RC_MODULE_CONFIG_TOKEN = new InjectionToken('rc.module.config');
export const RC_MODULE_STATE_TOKEN = new InjectionToken('rc.module.state');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UiComponentsConfig {}

// Installed modules
const modules = [
  CommonModule,
  NgOptimizedImage,
  FormsModule,
  PortalModule,
  ReactiveFormsModule,
  RouterModule,
  ScrollingModule,
  CdkVirtualScrollViewport,
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
  VCLDataListModule,
  VCLPanelModule,
  VCLCheckboxModule,
  VCLPanelModule,
  VCLButtonGroupModule,
  VCLBadgeModule,
  VCLFormControlGroupModule,
  VCLGalleryModule,
  VCLFileInputModule,
  ModulesSharedModule,
  OverlayModule,
  VCLRadioButtonModule,
];

const atoms = [
  RCBadgeComponent,
  RcBusyIndicatorComponent,
  RcCopyrightComponent,
  RcNoRecordsComponent,
  RcScrollableContainerComponent,
  RcSubmitButtonComponent,
  RcPopoverActionComponent,
  RCHeading1Component,
];

const molecules = [
  RcOrderInfoComponent,
  RcOrderItemsComponent,
  RcOrderTotalsComponent,
  RcOrderAddressComponent,
  RcShopInfoComponent,
  RcProductDetailsComponent,
  RcProductVariantComponent,
  RcProductVariantsComponent,
  RcProductImagesComponent,
  RcOrderItemComponent,
  RcProductTemplateComponent,
  RcProductTemplatesComponent,
  RcRoleAssociationComponent,
  RcRolesAssociationsComponent,
  RcCardComponent,
];

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
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
  RcDataListProductComponent,
  RcDataListKeyValueComponent,
  RcDataListKeyValueWithBracketsComponent,
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
  RcCrudCreateComponent,
  RcCrudEditComponent,
  RcProductViewComponent,
  JSONEditorComponent,
  RcDataListFulfilmentComponent,
  FilterSortCardComponent,
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
  RcPageOrderComponent,
];

const templates = [RcPublicTemplateComponent, RcPrivateTemplateComponent];

const pipes = [HighlightPipe, ProductImagePipe, AppendBucketDomainPipe];

@NgModule({
  imports: [...modules],
  declarations: [
    ...atoms,
    ...molecules,
    ...organisms,
    ...pages,
    ...templates,
    ...pipes,
  ],
  exports: [
    ...modules,
    ...atoms,
    ...molecules,
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
