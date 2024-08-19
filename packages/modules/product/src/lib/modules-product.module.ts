import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { ProductCreationFormComponent } from './components/forms/product-creation-form.component';
import { ProductFileFormComponent } from './components/forms/product-files-form.component';
import { ProductImageFormComponent } from './components/forms/product-image-form.component';
import { ProductPackageFormComponent } from './components/forms/product-package-form.component';
import { ProductPriceFormComponent } from './components/forms/product-price-form.component';
import { ProductPropertyFormComponent } from './components/forms/product-property-form.component';
import { ProductVariantFormComponent } from './components/forms/product-variant-form.component';
import { ProductCreateComponent } from './components/product-create.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductIndexComponent } from './components/product-index.component';
import { ProductVariantEditComponent } from './components/product-variant-modal.component';
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
    ProductVariantFormComponent,
    ProductPriceFormComponent,
    ProductImageFormComponent,
    ProductPropertyFormComponent,
    ProductFileFormComponent,
    ProductPackageFormComponent,
    ProductVariantEditComponent,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesProductModule {}
