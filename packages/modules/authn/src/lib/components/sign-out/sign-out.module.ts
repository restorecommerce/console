import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { SignOutComponent } from './sign-out.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignOutComponent,
      },
    ]),
  ],
  declarations: [SignOutComponent],
})
export class SignOutModule {}
