import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { FulfillmentComponent } from './components/fulfillment/fulfillment.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';
import { modulesFulfillmentRoutes } from './lib.routes';

@NgModule({
  declarations: [FulfillmentTemplateComponent, FulfillmentComponent],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild(modulesFulfillmentRoutes),
  ],
})
export class ModulesFulfillmentModule {}
