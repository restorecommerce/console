import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { FulfillmentComponent } from './components/fulfillment/fulfillment.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';

export const modulesFulfillmentRoutes: Route[] = [
  {
    path: '',
    component: FulfillmentTemplateComponent,
    title: ROUTER.pages.main.children.fulfillment.title,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FulfillmentComponent,
      },
    ],
  },
];
