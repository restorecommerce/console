import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ProductComponent } from './components/product/product.component';
import { ProductTemplateComponent } from './components/template/product-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ProductTemplateComponent,
    title: ROUTER.pages.main.children.product.title,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductComponent,
      },
    ],
  },
];
