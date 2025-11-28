import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RsSignInComponent, RsPasswordRecoveryComponent } from './lib/auth';
import { RsBreadcrumbComponent } from './lib/breadcrum';
import { RsHeaderToolbarComponent } from './lib/header';
import { RsBannerComponent } from './lib/header-brand';
import { LayoutShellComponent } from './lib/layout-shell';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RsSignInComponent,
    RsPasswordRecoveryComponent,
    RsBannerComponent,
    LayoutShellComponent,
    RsBreadcrumbComponent,
    RsHeaderToolbarComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
    RsSignInComponent,
    RsPasswordRecoveryComponent,
    RsBannerComponent,
    LayoutShellComponent,
    RsBreadcrumbComponent,
    RsHeaderToolbarComponent,
  ],
})
export class RSUiModule {}
