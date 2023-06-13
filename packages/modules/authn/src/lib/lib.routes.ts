import { Route } from '@angular/router';

import { AuthnTemplateComponent } from './components/authn-template.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

export const modulesAuthnRoutes: Route[] = [
  {
    path: '',
    component: AuthnTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'password-recovery',
        component: PasswordRecoveryComponent,
      },
    ],
  },
];
