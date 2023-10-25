import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';
import {
  PrivateGuard,
  RedirectActivationGuard,
  RedirectConfirmEmailGuard,
  RedirectConfirmPasswordGuard,
} from '@console-modules/shared';

import {
  PrivateTemplateComponent,
  PublicTemplateComponent,
} from './components/template';

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
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/account').then((m) => m.ModulesAccountModule),
  },
  {
    path: ROUTER.pages.main.children.management.path,
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/management').then(
        (m) => m.ModulesManagementModule
      ),
  },
  {
    path: ROUTER.pages.main.children.layout.path,
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/layout').then((m) => m.ModulesLayoutModule),
  },
  {
    path: ROUTER.pages.main.children.overflow.path,
    component: PrivateTemplateComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    loadChildren: () =>
      import('@console-modules/overflow').then((m) => m.ModulesOverflowModule),
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
