import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ConfirmEmailComponent } from './confirm-email.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmEmailComponent,
      },
    ]),
  ],
  declarations: [ConfirmEmailComponent],
})
export class ConfirmEmailModule {}
