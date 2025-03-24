import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ProductCreateComponent } from './components/product-create.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductIndexComponent } from './components/product-index.component';
import { ProductViewComponent } from './components/product-view.component';
import { ProductTemplateComponent } from './components/template/product-template.component';
import { ProductNameResolver } from './resolvers/product-name.resolver';

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
