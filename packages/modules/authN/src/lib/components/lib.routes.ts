import { Route } from '@angular/router';

import { LogInComponent } from './sign-in/sign-in.component';

export const SIGN_IN_ROUTES: Route[] = [
  {
    path: '',
    component: LogInComponent,
  },
];
