import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

export const appRoutes: Route[] = [
  {
    path: ROUTER.pages.main.path,
    loadChildren: () =>
      import('@console-modules/main').then((m) => m.ModulesMainModule),
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.main.path,
  },
];
