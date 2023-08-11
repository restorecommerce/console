import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ConfirmPasswordComponent } from './confirm-password.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmPasswordComponent,
      },
    ]),
  ],
  declarations: [ConfirmPasswordComponent],
})
export class ConfirmPasswordModule {}
