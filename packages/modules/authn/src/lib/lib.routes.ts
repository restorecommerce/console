import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ActivationComponent } from './components/activation/activation.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthnTemplateComponent } from './components/template/authn-template.component';
import { PublicGuard } from './guards/public.guard';

export const modulesAuthnRoutes: Route[] = [
  {
    path: '',
    component: AuthnTemplateComponent,
    children: [
      {
        path: ROUTER.pages.public.children.auth.children.signIn.path,
        canActivate: [PublicGuard],
        component: SignInComponent,
      },
      {
        path: ROUTER.pages.public.children.auth.children.signUp.path,
        canActivate: [PublicGuard],
        component: SignUpComponent,
      },
      {
        path: ROUTER.pages.public.children.auth.children.passwordRecovery.path,
        canActivate: [PublicGuard],
        component: PasswordRecoveryComponent,
      },
      {
        path: ROUTER.pages.public.children.auth.children.activation.path,
        component: ActivationComponent,
      },
      {
        path: ROUTER.pages.public.children.auth.children.confirmEmail.path,
        component: ConfirmEmailComponent,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.public.children.auth.children.signIn.path,
      },
    ],
  },
];
