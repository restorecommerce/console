import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ActivationComponent } from './activation.component';

@NgModule({
  declarations: [ActivationComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ActivationComponent,
      },
    ]),
  ],
})
export class ActivationModule {}
