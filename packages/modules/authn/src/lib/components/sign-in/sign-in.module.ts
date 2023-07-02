import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInComponent,
      },
    ]),
  ],
  declarations: [SignInComponent],
})
export class SignInModule {}
