import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { PrivateGuard } from '@console-modules/shared';

import { PrivateTemplateComponent } from './components/template/private-template.component';
import { PublicTemplateComponent } from './components/template/public-template.component';

export const modulesMainRoutes: Route[] = [
  {
    path: ROUTER.pages.main.children.home.path,
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/home').then((m) => m.ModulesHomeModule),
  },

  {
    path: ROUTER.pages.main.children.auth.path,
    component: PublicTemplateComponent,
    loadChildren: () =>
      import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
  },
  {
    path: ROUTER.pages.main.children.auth.path,
    loadChildren: () =>
      import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
  },
  {
    path: '',
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    children: [
      {
        path: ROUTER.pages.main.children.orders.path,
        loadChildren: () =>
          import('@console-modules/order').then((m) => m.OrderModule),
      },
      {
        path: ROUTER.pages.main.children.fulfillments.path,
        loadChildren: () =>
          import('@console-modules/fulfillment').then(
            (m) => m.modulesFulfillmentRoutes
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: ROUTER.pages.main.children.home.path,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.main.children.home.path,
    pathMatch: 'full',
  },
];
