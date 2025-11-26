import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogInComponent } from './lib/auth';
import { RsBreadcrumbComponent } from './lib/breadcrum';
import { RsHeaderToolbarComponent } from './lib/header';
import { RsBannerComponent } from './lib/header-brand';
import { LayoutShellComponent } from './lib/layout-shell';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LogInComponent,
    RsBannerComponent,
    LayoutShellComponent,
    RsBreadcrumbComponent,
    RsHeaderToolbarComponent,
  ],
  declarations: [],
  exports: [LayoutShellComponent],
})
export class RSUiModule {}
