import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { PasswordRecoveryComponent } from './password-recovery.component';

@NgModule({
  declarations: [PasswordRecoveryComponent],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordRecoveryComponent,
      },
    ]),
  ],
})
export class PasswordRecoveryModule {}
