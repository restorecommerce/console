import { Route } from '@angular/router';

import { RsConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { RsPasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PublicGuard } from './public.guard';
import { RsSignInComponent } from './sign-in/sign-in.component';
import { RsSignUpComponent } from './sign-up/sign-up.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    canMatch: [PublicGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RsSignInComponent,
      },
      {
        path: 'sign-up',
        component: RsSignUpComponent,
      },
      {
        path: 'password-recovery',
        component: RsPasswordRecoveryComponent,
      },
      {
        path: 'confirm-password',
        component: RsConfirmPasswordComponent,
      },
    ],
  },
];
