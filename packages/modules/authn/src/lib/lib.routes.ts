import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ActivationComponent } from './components/activation/activation.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
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
        component: SignInComponent,
      },
      {
        path: ROUTER.pages.main.children.auth.children.signUp.path,
        component: SignUpComponent,
      },
      {
        path: ROUTER.pages.main.children.auth.children.passwordRecovery.path,
        component: PasswordRecoveryComponent,
      },
      {
        path: ROUTER.pages.main.children.auth.children.activation.path,
        component: ActivationComponent,
      },
      {
        path: ROUTER.pages.main.children.auth.children.confirmEmail.path,
        component: ConfirmEmailComponent,
      },
    ],
  },
];
