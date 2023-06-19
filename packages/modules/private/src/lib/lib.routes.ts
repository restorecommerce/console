import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { PrivateGuard } from '@console-modules/authn';

import { PrivateTemplateComponent } from './components/template/private-template.component';

export const modulesPrivateRoutes: Route[] = [
  {
    path: ROUTER.pages.private.path,
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: ROUTER.pages.private.children.home.path,
        loadChildren: () =>
          import('@console-modules/home').then((m) => m.ModulesHomeModule),
      },
      {
        path: ROUTER.pages.private.children.management.path,
        loadChildren: () =>
          import('@console-modules/management').then(
            (m) => m.ModulesManagementModule
          ),
      },
      {
        path: ROUTER.pages.private.children.layout.path,
        loadChildren: () =>
          import('@console-modules/layout').then((m) => m.ModulesLayoutModule),
      },
      {
        path: ROUTER.pages.private.children.overflow.path,
        loadChildren: () =>
          import('@console-modules/overflow').then(
            (m) => m.ModulesOverflowModule
          ),
      },
    ],
  },
];
