import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { FulfillmentCreateComponent } from './components/fulfillment-create.component';
import { FulfillmentEditComponent } from './components/fulfillment-edit.component';
import { FulfillmentIndexComponent } from './components/fulfillment-index.component';
import { FulfillmentViewComponent } from './components/fulfillment-view.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';
import { modulesFulfillmentRoutes } from './lib.routes';

@NgModule({
  declarations: [
    FulfillmentTemplateComponent,
    FulfillmentIndexComponent,
    FulfillmentCreateComponent,
    FulfillmentEditComponent,
    FulfillmentViewComponent,
  ],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild(modulesFulfillmentRoutes),
  ],
})
export class ModulesFulfillmentModule {}
