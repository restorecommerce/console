import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ConfirmEmailComponent } from './confirm-email.component';

@NgModule({
  declarations: [ConfirmEmailComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmEmailComponent,
      },
    ]),
  ],
})
export class ConfirmEmailModule {}
