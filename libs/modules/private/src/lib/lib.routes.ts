import { Route } from '@angular/router';

import { ROUTER } from '@console/core/config';

import { PrivateTemplateComponent } from './template/private-template.component';

export const modulesPrivateRoutes: Route[] = [
  {
    path: ROUTER.pages.private.path,
    component: PrivateTemplateComponent,
    children: [
      {
        path: ROUTER.pages.private.children.home.path,
        pathMatch: 'full',
        loadChildren: () =>
          import('@console/modules/home').then((m) => m.ModulesHomeModule),
      },
      {
        path: ROUTER.pages.private.children.drawer.path,
        loadChildren: () =>
          import('@console/modules/drawer').then((m) => m.ModulesDrawerModule),
      },
      {
        path: ROUTER.pages.private.children.layout.path,
        loadChildren: () =>
          import('@console/modules/layout').then((m) => m.ModulesLayoutModule),
      },
      {
        path: ROUTER.pages.private.children.overflow.path,
        loadChildren: () =>
          import('@console/modules/overflow').then(
            (m) => m.ModulesOverflowModule
          ),
      },
    ],
  },
];
