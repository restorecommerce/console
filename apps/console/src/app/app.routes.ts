import { Route } from '@angular/router';

import { ROUTER } from '@console/core/config';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: ROUTER.pages.private.path,
        loadChildren: () =>
          import('@console/modules/private').then(
            (m) => m.ModulesPrivateModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.private.path,
  },
];
