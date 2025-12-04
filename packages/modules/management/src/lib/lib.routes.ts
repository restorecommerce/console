import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

export const modulesManagementRoutes: Route[] = [
  {
    path: '',
    title: ROUTER.pages.main.children.management.title,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.index.path,
        loadChildren: () =>
          import('./components/management/management.module').then(
            (m) => m.ManagementModule
          ),
        title: ROUTER.pages.main.children.management.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.path,
        loadChildren: () =>
          import('./components/iam/iam.module').then((m) => m.IamModule),
        title:
          ROUTER.pages.main.children.management.children.iam.children.index
            .title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.management.children.iam.path,
      },
    ],
  },
];
