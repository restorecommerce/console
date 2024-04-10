import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ProductCreateComponent } from './components/product-create.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductIndexComponent } from './components/product-index.component';
import { ProductViewComponent } from './components/product-view.component';
import { ProductTemplateComponent } from './components/template/product-template.component';
import { modulesProductRoutes } from './lib.routes';

@NgModule({
  declarations: [
    ProductTemplateComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductViewComponent,
  ],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesProductRoutes)],
})
export class ModulesProductModule {}
