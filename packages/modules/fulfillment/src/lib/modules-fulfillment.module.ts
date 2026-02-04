import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { modulesFulfillmentRoutes } from './fulfillment.routes';

@NgModule({
  imports: [RouterModule.forChild(modulesFulfillmentRoutes)],
})
export class ModulesFulfillmentModule {}
