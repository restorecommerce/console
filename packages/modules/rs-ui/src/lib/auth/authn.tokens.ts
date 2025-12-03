import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PasswordRecoveryPayload } from './password-recovery';
import { SignInCredentials } from './sign-in/sign-in.component';

export interface ModulesAuthnConfig {
  signInHandler: (payload: SignInCredentials) => void;

  // Optional: what happens when user submits password recovery
  passwordRecoveryHandler?: (payload: PasswordRecoveryPayload) => void;

  // Optional extras – logo, redirects, etc. (extend as you like)
  logoUrl?: string;
  redirectAfterLoginUrl?: string;

  isAuthenticated$: Observable<boolean>;
  redirectAuthenticatedTo?: string;
}

export const MODULES_AUTHN_CONFIG = new InjectionToken<ModulesAuthnConfig>(
  'MODULES_AUTHN_CONFIG'
);
