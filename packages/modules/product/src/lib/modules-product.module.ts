import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ProductCreateComponent } from './components/product-create.component';
import { ProductCreationFormComponent } from './components/product-creation-form.component';
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
    ProductCreationFormComponent,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesProductModule {}
