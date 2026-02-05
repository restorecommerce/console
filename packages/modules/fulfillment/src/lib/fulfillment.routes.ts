import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

// import { FulfillmentEmptyStateComponent } from './ui/components/fulfillment-empty-state/fulfillment-empty.component';
import { FulfillmentTemplateComponent } from './ui/components/fulfillment-template/fulfillment-template.component';
import { FulfillmentViewComponent } from './ui/pages/fulfillment-view/fulfillment-view.component';
// import { FulfillmentViewComponent } from './ui/pages/fulfillment-view/fulfillment-view.component';

export const modulesFulfillmentRoutes: Route[] = [
  {
    path: '',
    component: FulfillmentTemplateComponent,
    title: ROUTER.pages.main.children.fulfillments.title,
    children: [
      /** Sidebar: always show fulfillment list */
      // {
      //   path: '',
      //   component: FulfillmentEmptyStateComponent,
      // },
      {
        path: ROUTER.pages.main.children.fulfillments.children.view.path, // e.g. ':fulfillmentId'
        component: FulfillmentViewComponent,
        title: ROUTER.pages.main.children.fulfillments.children.view.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.fulfillments.children.index.path,
      },
    ],
  },
];
