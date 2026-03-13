import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { IAMUserTemplateComponent } from './ui/components/iam-user-template/iam-user-template.component';
import { IAMUserCreateComponent } from './ui/pages/iam-user-create/iam-user-create.component';
import { IAMUserEditComponent } from './ui/pages/iam-user-edit/iam-user-edit.component';
import { IAMUserViewComponent } from './ui/pages/iam-user-view/iam-user-view.component';

export const modulesIamUserRoutes: Route[] = [
  {
    path: '',
    component: IAMUserTemplateComponent,
    title: ROUTER.pages.main.children.iam.title,
    children: [
      /** Sidebar: always show fulfillment list */
      // {
      //   path: '',
      //   component: FulfillmentEmptyStateComponent,
      // },
      {
        path: ROUTER.pages.main.children.iam.children.view.path,
        component: IAMUserViewComponent,
        title: ROUTER.pages.main.children.iam.children.view.title,
      },
      {
        path: ROUTER.pages.main.children.iam.children.edit.path,
        component: IAMUserEditComponent,
        title: ROUTER.pages.main.children.iam.children.edit.title,
      },
      {
        path: ROUTER.pages.main.children.iam.children.create.path,
        component: IAMUserCreateComponent,
        title: ROUTER.pages.main.children.iam.children.create.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.iam.children.index.path,
      },
    ],
  },
];
