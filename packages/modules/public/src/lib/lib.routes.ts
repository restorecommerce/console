import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { PublicTemplateComponent } from './components/template/public-template.component';

export const modulesPublicRoutes: Route[] = [
  {
    path: ROUTER.pages.public.path,
    component: PublicTemplateComponent,
    children: [
      {
        path: ROUTER.pages.public.children.auth.path,
        loadChildren: () =>
          import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.public.children.auth.path,
  },
];
