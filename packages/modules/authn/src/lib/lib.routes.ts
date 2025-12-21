import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { SignInComponent } from './pages/sign-in/sign-in.component';

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
];
