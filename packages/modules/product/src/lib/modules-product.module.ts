import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ProductComponent } from './components/product/product.component';
import { ProductTemplateComponent } from './components/template/product-template.component';
import { modulesProductRoutes } from './lib.routes';

@NgModule({
  declarations: [ProductTemplateComponent, ProductComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesProductRoutes)],
})
export class ModulesProductModule {}
