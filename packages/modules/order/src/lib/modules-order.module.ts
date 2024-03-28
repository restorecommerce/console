import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { OrderComponent } from './components/order/order.component';
import { OrderTemplateComponent } from './components/template/order-template.component';
import { modulesOrderRoutes } from './lib.routes';

@NgModule({
  declarations: [OrderTemplateComponent, OrderComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesOrderRoutes)],
})
export class ModulesOrderModule {}
