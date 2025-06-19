import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ProductFileFormComponent } from './forms/product-files-form.component';
import { ProductImageFormComponent } from './forms/product-image-form.component';
import { ProductPackageFormComponent } from './forms/product-package-form.component';
import { ProductPropertyFormComponent } from './forms/product-property-form.component';
import { ProductVariantFormComponent } from './forms/product-variant-form/product-variant-form.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductIndexComponent } from './product-index.component';
import { ProductTemplateEditComponent } from './product-template-modal.component';
import { ProductVariantEditComponent } from './product-variant-modal.component';
import { ProductViewComponent } from './product-view.component';
import { ProductNameResolver } from './resolvers/product-name.resolver';
import { ProductTemplateComponent } from './template/product-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ProductTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
    children: [
      {
        path: ROUTER.pages.main.children.products.children.index.path,
        component: ProductIndexComponent,
        title: ROUTER.pages.main.children.products.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.view.path,
        component: ProductViewComponent,
        title: ROUTER.pages.main.children.products.children.view.title,
        resolve: { productName: ProductNameResolver },
        data: {
          breadcrumb: (data: { productName: string }) => data.productName,
        },
      },
      {
        path: ROUTER.pages.main.children.products.children.create.path,
        component: ProductCreateComponent,
        title: ROUTER.pages.main.children.products.children.create.title,
      },
      {
        path: ROUTER.pages.main.children.products.children.edit.path,
        component: ProductEditComponent,
        title: ROUTER.pages.main.children.products.children.edit.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.products.children.index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductTemplateComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductViewComponent,
    ProductImageFormComponent,
    ProductPropertyFormComponent,
    ProductFileFormComponent,
    ProductPackageFormComponent,
    ProductVariantEditComponent,
    ProductTemplateEditComponent,
    ProductVariantFormComponent,
  ],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesProductRoutes),
  ],
})
export class ModulesProductModule {}
