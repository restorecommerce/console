import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { OrderIndexComponent } from './components/order-index.component';
import { OrderViewComponent } from './components/order-view.component';
import { OrderTemplateComponent } from './components/template/order-template.component';

export const modulesOrderRoutes: Route[] = [
  {
    path: '',
    component: OrderTemplateComponent,
    title: ROUTER.pages.main.children.orders.title,
    children: [
      {
        path: ROUTER.pages.main.children.orders.children.index.path,
        component: OrderIndexComponent,
        title: ROUTER.pages.main.children.orders.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.orders.children.view.path,
        component: OrderViewComponent,
        title: ROUTER.pages.main.children.orders.children.view.title,
      },
      // {
      //   path: ROUTER.pages.main.children.orders.children.create.path,
      //   component: OrderCreateComponent,
      //   title: ROUTER.pages.main.children.orders.children.create.title,
      // },
      // {
      //   path: ROUTER.pages.main.children.orders.children.edit.path,
      //   component: OrderEditComponent,
      //   title: ROUTER.pages.main.children.orders.children.edit.title,
      // },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.orders.children.index.path,
      },
    ],
  },
];
