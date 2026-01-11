import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ForgotPasswordComponent, SignInComponent } from './pages';

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
    path: ROUTER.pages.main.children.auth.children.passwordRecovery.path,
    component: ForgotPasswordComponent,

    title: ROUTER.pages.main.children.auth.children.passwordRecovery.title,
  },
];
