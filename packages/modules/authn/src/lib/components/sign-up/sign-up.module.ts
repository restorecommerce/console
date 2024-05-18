import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent,
      },
    ]),
  ],
})
export class SignUpModule {}
