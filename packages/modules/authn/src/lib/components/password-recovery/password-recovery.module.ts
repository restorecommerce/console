import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { PasswordRecoveryComponent } from './password-recovery.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordRecoveryComponent,
      },
    ]),
  ],
  declarations: [PasswordRecoveryComponent],
})
export class PasswordRecoveryModule {}
