import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { Iam } from './iam/iam';

export const modulesIAMRoutes: Route[] = [
  {
    path: '',
    component: Iam,
    title: ROUTER.pages.main.children.iam.title,
    children: [
      /** Sidebar: always show fulfillment list */
      // {
      //   path: '',
      //   component: FulfillmentEmptyStateComponent,
      // },
      // {
      //   path: ROUTER.pages.main.children.fulfillments.children.view.path, // e.g. ':fulfillmentId'
      //   component: FulfillmentViewComponent,
      //   title: ROUTER.pages.main.children.fulfillments.children.view.title,
      // },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.iam.children.index.path,
      },
    ],
  },
];
