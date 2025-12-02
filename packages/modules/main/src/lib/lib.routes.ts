import { Route } from '@angular/router';
import { LayoutShellComponent } from '@console/rs-ui';

import { ROUTER } from '@console-core/config';
import {
  PrivateGuard,
  RedirectActivationGuard,
  RedirectConfirmEmailGuard,
  RedirectConfirmPasswordGuard,
} from '@console-modules/shared';

import { PublicTemplateComponent } from './components/template';

export const modulesMainRoutes: Route[] = [
  {
    path: ROUTER.pages.main.children.home.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/home').then((m) => m.ModulesHomeModule),
  },
  {
    path: ROUTER.pages.main.children.activateAccount.path,
    component: PublicTemplateComponent,
    canActivate: [RedirectActivationGuard],
  },
  {
    path: ROUTER.pages.main.children.confirmEmailChange.path,
    component: PublicTemplateComponent,
    canActivate: [RedirectConfirmEmailGuard],
  },
  {
    path: ROUTER.pages.main.children.confirmPasswordChange.path,
    component: PublicTemplateComponent,
    canActivate: [RedirectConfirmPasswordGuard],
  },
  {
    path: ROUTER.pages.main.children.auth.path,
    component: PublicTemplateComponent,
    loadChildren: () =>
      import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
  },
  {
    path: ROUTER.pages.main.children.account.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/account').then((m) => m.ModulesAccountModule),
  },
  {
    path: ROUTER.pages.main.children.management.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/management').then(
        (m) => m.ModulesManagementModule
      ),
  },
  {
    path: ROUTER.pages.main.children.orders.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/order').then((m) => m.ModulesOrderModule),
  },
  {
    path: ROUTER.pages.main.children.products.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/product').then((m) => m.ModulesProductModule),
  },
  {
    path: ROUTER.pages.main.children.invoices.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/invoice').then((m) => m.ModulesInvoiceModule),
  },
  {
    path: ROUTER.pages.main.children.fulfillments.path,
    component: LayoutShellComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/fulfillment').then(
        (m) => m.ModulesFulfillmentModule
      ),
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
