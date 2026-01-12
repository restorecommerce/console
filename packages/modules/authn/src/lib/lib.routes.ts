import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { PasswordRecoveryComponent, SignInComponent } from './pages';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const modulesAuthnRoutes: Route[] = [
  {
    path: '',
    redirectTo: ROUTER.pages.main.children.auth.children.signIn.path,
    pathMatch: 'full',
  },
  {
    path: ROUTER.pages.main.children.auth.children.signIn.path,
    component: SignInComponent,

    title: ROUTER.pages.main.children.auth.children.signIn.title,
  },
  {
    path: ROUTER.pages.main.children.auth.children.signUp.path,
    component: SignUpComponent,

    title: ROUTER.pages.main.children.auth.children.signUp.title,
  },

  {
    path: ROUTER.pages.main.children.auth.children.passwordRecovery.path,
    component: PasswordRecoveryComponent,

    title: ROUTER.pages.main.children.auth.children.passwordRecovery.title,
  },
];
