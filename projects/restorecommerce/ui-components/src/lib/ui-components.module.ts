import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken, ModuleWithProviders, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { VCLNavigationModule, VCLButtonModule, VCLIconModule, VCLBusyIndicatorModule, VCLPopoverModule, IconResolverService, VCLEmbeddedInputGroupModule, VCLInputModule, VCLDrawerModule  } from '@vcl/ng-vcl';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DrawerService, DrawerMode } from './services/drawer.service';
import { RCMdiIconResolverService } from './services/icon-resolve.service';

import { RcDataListComponent } from './components/datalist/datalist.component';
import { RcDataListItemComponent, RcDataListLabelComponent, RcDataListSublabelComponent } from './components/datalist/datalist-item.component';
import { RcAppComponent } from './components/app/app.component';
// import { RcRowDirective } from './components/flex-grid/flex-grid.directive';
import { RcHeaderComponent } from './components/header/header.component';
import { RcDrawerNavigationComponent } from './components/drawer/drawer-navigation.component';
import { RcDrawerNavigationItemComponent } from './components/drawer/drawer-navigation-item.component';
import { RcToolbarComponent } from './components/toolbar/toolbar.component';
import { RcSearchBarComponent } from './components/toolbar/searchbar.component';
import { RcBannerComponent } from './components/header/banner.component';
import { RcHeaderToolbarComponent } from './components/header/header-toolbar.component';
import { RcToggleDrawerComponent } from './components/toggle-drawer.component';
import { RcHeaderNavigationComponent } from './components/header/header-navigation.component';
import { RcHeaderNavigationItemComponent } from './components/header/header-navigation-item.component';

export {
  RcAppComponent,
  RcHeaderToolbarComponent,
  RcBannerComponent,
  RcDrawerNavigationComponent,
  RcDrawerNavigationItemComponent,
  RcHeaderComponent,
  RcHeaderNavigationComponent,
  RcHeaderNavigationItemComponent,
  // RcRowDirective,
  RcDataListComponent,
  RcDataListItemComponent,
  RcDataListLabelComponent,
  RcDataListSublabelComponent,
  RcToolbarComponent,
  RcSearchBarComponent,
  RcToggleDrawerComponent,
  DrawerService,
  DrawerMode
};

export const RC_MODULE_CONFIG_TOKEN = new InjectionToken('rc.module.config');
export const RC_MODULE_STATE_TOKEN = new InjectionToken('rc.module.state');

// tslint:disable-next-line:no-empty-interface
export interface UiComponentsConfig {
}

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    PortalModule,
    VCLInputModule,
    VCLPopoverModule,
    VCLNavigationModule,
    VCLIconModule,
    VCLButtonModule,
    VCLBusyIndicatorModule,
    VCLEmbeddedInputGroupModule,
    VCLDrawerModule
  ],
  declarations: [
    RcAppComponent,
    RcDrawerNavigationComponent,
    RcDrawerNavigationItemComponent,
    RcHeaderNavigationComponent,
    RcHeaderNavigationItemComponent,
    RcHeaderComponent,
    RcHeaderToolbarComponent,
    RcBannerComponent,
    // RcRowDirective,
    RcDataListComponent,
    RcDataListItemComponent,
    RcDataListLabelComponent,
    RcDataListSublabelComponent,
    RcToolbarComponent,
    RcSearchBarComponent,
    RcToggleDrawerComponent
  ],
  exports: [
    RcAppComponent,
    RcDrawerNavigationComponent,
    RcDrawerNavigationItemComponent,
    RcHeaderNavigationComponent,
    RcHeaderNavigationItemComponent,
    RcHeaderComponent,
    RcHeaderToolbarComponent,
    RcBannerComponent,
    // RcRowDirective,
    RcDataListComponent,
    RcDataListItemComponent,
    RcDataListLabelComponent,
    RcDataListSublabelComponent,
    RcToolbarComponent,
    RcSearchBarComponent,
    RcToggleDrawerComponent
  ],
  providers: [
    DrawerService,
    {
      provide: IconResolverService,
      useClass: RCMdiIconResolverService,
      multi: true
    },
    {
      provide: RC_MODULE_CONFIG_TOKEN,
      useValue: {}
    },
  ],
})
export class RcUiComponentsModule {
  static forRoot(config: UiComponentsConfig = {}): ModuleWithProviders<RcUiComponentsModule> {
    return {
      ngModule: RcUiComponentsModule,
      providers: [
        {
          provide: RC_MODULE_CONFIG_TOKEN,
          useValue: config
        },
      ]
    };
  }

  constructor(@Inject(RC_MODULE_CONFIG_TOKEN) config: UiComponentsConfig) {
  }
}
