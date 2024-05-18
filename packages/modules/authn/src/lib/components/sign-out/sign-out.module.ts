import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { SignOutComponent } from './sign-out.component';

@NgModule({
  declarations: [SignOutComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: SignOutComponent,
      },
    ]),
  ],
})
export class SignOutModule {}
