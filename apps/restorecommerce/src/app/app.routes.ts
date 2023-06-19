import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: ROUTER.pages.private.path,
        loadChildren: () =>
          import('@console-modules/private').then(
            (m) => m.ModulesPrivateModule
          ),
      },
      {
        path: ROUTER.pages.public.path,
        loadChildren: () =>
          import('@console-modules/public').then((m) => m.ModulesPublicModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.private.children.home.path,
  },
];
