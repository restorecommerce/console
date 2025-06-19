import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ProductTemplateComponent } from './components/template/product-template.component';

export const modulesProductRoutes: Route[] = [
  {
    path: '',
    component: ProductTemplateComponent,
    title: ROUTER.pages.main.children.products.title,
  },
];
