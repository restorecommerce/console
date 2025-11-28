import { Route } from '@angular/router';

import { RsPasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RsSignInComponent } from './sign-in/sign-in.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RsSignInComponent,
  },
  {
    path: 'password-recovery',
    component: RsPasswordRecoveryComponent,
  },
];
