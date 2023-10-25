import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { PrivateGuard, PublicGuard } from '@console-modules/shared';

import { AuthnTemplateComponent } from './components/template/authn-template.component';

export const modulesAuthnRoutes: Route[] = [
  {
    path: '',
    component: AuthnTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.path,
        redirectTo: ROUTER.pages.main.children.auth.children.signIn.path,
        pathMatch: 'full',
      },
      {
        path: ROUTER.pages.main.children.auth.children.signUp.path,
        canActivate: [PublicGuard],
        canActivateChild: [PublicGuard],
        loadChildren: () =>
          import('./components/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
        title: ROUTER.pages.main.children.auth.children.signUp.title,
      },
      {
        path: ROUTER.pages.main.children.auth.children.activation.path,
        canActivate: [PublicGuard],
        canActivateChild: [PublicGuard],
        loadChildren: () =>
          import('./components/activation/activation.module').then(
            (m) => m.ActivationModule
          ),
        title: ROUTER.pages.main.children.auth.children.activation.title,
      },
      {
        path: ROUTER.pages.main.children.auth.children.signIn.path,
        canActivate: [PublicGuard],
        canActivateChild: [PublicGuard],
        loadChildren: () =>
          import('./components/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
        title: ROUTER.pages.main.children.auth.children.signIn.title,
      },
      {
        path: ROUTER.pages.main.children.auth.children.signOut.path,
        canActivate: [PrivateGuard],
        canActivateChild: [PrivateGuard],
        loadChildren: () =>
          import('./components/sign-out/sign-out.module').then(
            (m) => m.SignOutModule
          ),
        title: ROUTER.pages.main.children.auth.children.signOut.title,
      },
      {
        path: ROUTER.pages.main.children.auth.children.passwordRecovery.path,
        canActivate: [PublicGuard],
        canActivateChild: [PublicGuard],
        loadChildren: () =>
          import(
            './components/password-recovery/password-recovery.module'
          ).then((m) => m.PasswordRecoveryModule),
        title: ROUTER.pages.main.children.auth.children.passwordRecovery.title,
      },
      {
        path: ROUTER.pages.main.children.auth.children.confirmPassword.path,
        canActivate: [PublicGuard],
        canActivateChild: [PublicGuard],
        loadChildren: () =>
          import('./components/confirm-password/confirm-password.module').then(
            (m) => m.ConfirmPasswordModule
          ),
        title: ROUTER.pages.main.children.auth.children.confirmPassword.title,
      },
    ],
  },
];
