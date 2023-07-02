import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ActivationComponent } from './activation.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivationComponent,
      },
    ]),
  ],
  declarations: [ActivationComponent],
})
export class ActivationModule {}
