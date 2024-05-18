import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { PasswordRecoveryComponent } from './password-recovery.component';

@NgModule({
  declarations: [PasswordRecoveryComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: PasswordRecoveryComponent,
      },
    ]),
  ],
})
export class PasswordRecoveryModule {}
