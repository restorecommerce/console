import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ConfirmEmailComponent } from './confirm-email.component';

@NgModule({
  declarations: [ConfirmEmailComponent],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmEmailComponent,
      },
    ]),
  ],
})
export class ConfirmEmailModule {}
