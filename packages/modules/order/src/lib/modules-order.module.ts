import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { OrderCreateComponent } from './components/order-create.component';
import { OrderEditComponent } from './components/order-edit.component';
import { OrderIndexComponent } from './components/order-index.component';
import { OrderItemComponent } from './components/order-item.component';
import { OrderViewComponent } from './components/order-view.component';
import { OrderTemplateComponent } from './components/template/order-template.component';
import { modulesOrderRoutes } from './lib.routes';
import { JSSFormModalComponent } from './modals/jss-form-modal.component';
import { OrderItemFormComponent } from './modals/order-item/order-item-form.component';
import { OrderItemImageThumbPipe } from './pipes/order-item-image.pipe';

@NgModule({
  declarations: [
    OrderTemplateComponent,
    OrderIndexComponent,
    OrderCreateComponent,
    OrderEditComponent,
    OrderViewComponent,
    OrderItemFormComponent,
    OrderItemComponent,
    JSSFormModalComponent,
    OrderItemImageThumbPipe,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesOrderRoutes),
  ],
})
export class ModulesOrderModule {}
