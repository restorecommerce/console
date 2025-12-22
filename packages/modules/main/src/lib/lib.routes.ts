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

  // Account Activation.....
  // {
  //   path: ROUTER.pages.main.children.activateAccount.path,
  //   canActivate: [RedirectActivationGuard],
  // },
  // {
  //   path: ROUTER.pages.main.children.confirmEmailChange.path,
  //   canActivate: [RedirectConfirmEmailGuard],
  // },
  // {
  //   path: ROUTER.pages.main.children.confirmPasswordChange.path,
  //   canActivate: [RedirectConfirmPasswordGuard],
  // },
  // .........

  // Latest code where we used the plug and play router.
  {
    path: ROUTER.pages.main.children.auth.path,
    loadChildren: () =>
      import('@console-modules/authn').then((m) => m.ModulesAuthnModule),
  },
  // {
  //   path: ROUTER.pages.main.children.account.path,
  //   component: LayoutShellComponent,
  //   canActivate: [PrivateGuard],
  //   canActivateChild: [PrivateGuard],
  //   loadChildren: () =>
  //     import('@console-modules/account').then((m) => m.ModulesAccountModule),
  // },
  // {
  //   path: ROUTER.pages.main.children.management.path,
  //   component: LayoutShellComponent,
  //   canActivate: [PrivateGuard],
  //   canActivateChild: [PrivateGuard],
  //   loadChildren: () =>
  //     import('@console-modules/management').then(
  //       (m) => m.ModulesManagementModule
  //     ),
  // },
  {
    path: '',
    redirectTo: ROUTER.pages.main.children.home.path,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ROUTER.pages.main.children.management.path,
    pathMatch: 'full',
  },
];
