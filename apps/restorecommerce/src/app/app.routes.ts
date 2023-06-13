import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@console-modules/home').then((m) => m.ModulesHomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@console-modules/profile').then((m) => m.ModulesProfileModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
