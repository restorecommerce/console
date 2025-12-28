import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FulfillmentIndexComponent } from './components/fulfillment-index.component';
import { FulfillmentViewComponent } from './components/fulfillment-view.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';
import { modulesFulfillmentRoutes } from './lib.routes';

@NgModule({
  imports: [
    RouterModule.forChild(modulesFulfillmentRoutes),
    FulfillmentIndexComponent,
    FulfillmentViewComponent,
    FulfillmentTemplateComponent,
  ],
})
export class ModulesFulfillmentModule {}
