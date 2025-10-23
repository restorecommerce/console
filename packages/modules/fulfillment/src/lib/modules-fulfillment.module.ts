import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { FulfillmentCreateComponent } from './components/fulfillment-create.component';
import { FulfillmentEditComponent } from './components/fulfillment-edit.component';
import { FulfillmentIndexComponent } from './components/fulfillment-index.component';
import { FulfillmentViewDetailsComponent } from './components/fulfillment-view-details.component';
import { FulfillmentViewComponent } from './components/fulfillment-view.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';
import { FulfilmentLabelModalComponent } from './components/view/fulfillment-label-modal.component';
import { modulesFulfillmentRoutes } from './lib.routes';
import { FulfilmentParcelsItemsPipe } from './pipes';

@NgModule({
  declarations: [
    FulfillmentIndexComponent,
    FulfillmentCreateComponent,
    FulfillmentEditComponent,
    FulfillmentViewComponent,
    FulfillmentViewDetailsComponent,
    FulfillmentTemplateComponent,
    FulfilmentLabelModalComponent,
    FulfilmentParcelsItemsPipe,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesFulfillmentRoutes),
  ],
})
export class ModulesFulfillmentModule {}
