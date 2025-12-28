import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { FulfillmentIndexComponent } from './components/fulfillment-index.component';
import { FulfillmentViewComponent } from './components/fulfillment-view.component';
import { FulfillmentTemplateComponent } from './components/template/fulfillment-template.component';

export const modulesFulfillmentRoutes: Route[] = [
  {
    path: '',
    component: FulfillmentTemplateComponent,
    title: ROUTER.pages.main.children.fulfillments.title,
    children: [
      {
        path: ROUTER.pages.main.children.fulfillments.children.index.path,
        component: FulfillmentIndexComponent,
        title: ROUTER.pages.main.children.fulfillments.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.fulfillments.children.view.path,
        component: FulfillmentViewComponent,
        title: ROUTER.pages.main.children.fulfillments.children.view.title,
      },
      // {
      //   path: ROUTER.pages.main.children.fulfillments.children.create.path,
      //   component: FulfillmentCreateComponent,
      //   title: ROUTER.pages.main.children.fulfillments.children.create.title,
      // },
      // {
      //   path: ROUTER.pages.main.children.fulfillments.children.edit.path,
      //   component: FulfillmentEditComponent,
      //   title: ROUTER.pages.main.children.fulfillments.children.edit.title,
      // },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.fulfillments.children.index.path,
      },
    ],
  },
];
