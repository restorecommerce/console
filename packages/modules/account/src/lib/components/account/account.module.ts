import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
      },
    ]),
  ],
})
export class AccountModule {}
