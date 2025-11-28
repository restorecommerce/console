import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RsSignInComponent, RsPasswordRecoveryComponent } from './lib/auth';
import { RsAuthPageComponent } from './lib/auth/auth-page/auth-page.component';
import { RsBreadcrumbComponent } from './lib/breadcrum';
import { RsCardComponent } from './lib/card/card.component';
import { RsCenteredPageComponent } from './lib/centered-page/centered-page.component';
import { RsCopyrightComponent } from './lib/copyright/copyright.component';
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
    RsCardComponent,
    RsCenteredPageComponent,
    RsCopyrightComponent,
    RsAuthPageComponent,
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
    RsCardComponent,
    RsCenteredPageComponent,
    RsCopyrightComponent,
    RsAuthPageComponent,
  ],
})
export class RSUiModule {}
