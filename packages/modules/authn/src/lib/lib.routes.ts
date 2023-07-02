import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { AuthnTemplateComponent } from './components/template/authn-template.component';

export const modulesAuthnRoutes: Route[] = [
  {
    path: '',
    component: AuthnTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTER.pages.main.children.auth.children.signIn.path,
        pathMatch: 'full',
      },
      {
        path: ROUTER.pages.main.children.auth.children.signIn.path,
        loadChildren: () =>
          import('./components/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: ROUTER.pages.main.children.auth.children.signUp.path,
        loadChildren: () =>
          import('./components/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
      {
        path: ROUTER.pages.main.children.auth.children.passwordRecovery.path,
        loadChildren: () =>
          import(
            './components/password-recovery/password-recovery.module'
          ).then((m) => m.PasswordRecoveryModule),
      },
      {
        path: ROUTER.pages.main.children.auth.children.activation.path,
        loadChildren: () =>
          import('./components/activation/activation.module').then(
            (m) => m.ActivationModule
          ),
      },
      {
        path: ROUTER.pages.main.children.auth.children.confirmEmail.path,
        loadChildren: () =>
          import('./components/confirm-email/confirm-email.module').then(
            (m) => m.ConfirmEmailModule
          ),
      },
    ],
  },
];
