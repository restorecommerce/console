import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { OrderEmptyStateComponent } from './ui/components/order-empty-state/order-empty.component';
import { OrderTemplateComponent } from './ui/components/order-template/order-template.component';
import { OrderListComponent } from './ui/pages/order-list/order-list.component';
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
        outlet: 'sidebar',
        component: OrderListComponent,
        title: ROUTER.pages.main.children.orders.children.index.title,
      },
      {
        path: '',
        outlet: 'content',
        component: OrderEmptyStateComponent,
      },
      {
        path: ROUTER.pages.main.children.orders.children.view.path, // e.g. ':orderId'
        outlet: 'content',
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
