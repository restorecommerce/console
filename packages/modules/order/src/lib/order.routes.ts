import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { OrderEmptyStateComponent } from './ui/components/order-empty-state/order-empty.component';
import { OrderTemplateComponent } from './ui/components/order-template/order-template.component';
import { OrderViewComponent } from './ui/pages/order-view/order-view.component';

export const modulesOrderRoutes: Route[] = [
  {
    path: '',
    component: OrderTemplateComponent,
    title: ROUTER.pages.main.children.orders.title,
    children: [
      /** Sidebar: always show order list */
      {
        path: '',
        component: OrderEmptyStateComponent,
      },
      {
        path: ROUTER.pages.main.children.orders.children.view.path, // e.g. ':orderId'
        component: OrderViewComponent,
        title: ROUTER.pages.main.children.orders.children.view.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.orders.children.index.path,
      },
    ],
  },
];
