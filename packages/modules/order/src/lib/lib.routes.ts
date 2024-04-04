import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { OrderComponent } from './components/order/order.component';
import { OrderTemplateComponent } from './components/template/order-template.component';

export const modulesOrderRoutes: Route[] = [
  {
    path: '',
    component: OrderTemplateComponent,
    title: ROUTER.pages.main.children.orders.title,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OrderComponent,
      },
    ],
  },
];
