import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { OrderCreateComponent } from './components/order-create.component';
import { OrderEditComponent } from './components/order-edit.component';
import { OrderIndexComponent } from './components/order-index.component';
import { OrderViewComponent } from './components/order-view.component';
import { OrderTemplateComponent } from './components/template/order-template.component';
import { modulesOrderRoutes } from './lib.routes';

@NgModule({
  declarations: [
    OrderTemplateComponent,
    OrderIndexComponent,
    OrderCreateComponent,
    OrderEditComponent,
    OrderViewComponent,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesOrderRoutes),
  ],
})
export class ModulesOrderModule {}
