import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ConfirmPasswordComponent } from './confirm-password.component';

@NgModule({
  declarations: [ConfirmPasswordComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmPasswordComponent,
      },
    ]),
  ],
})
export class ConfirmPasswordModule {}
