import { InjectionToken } from '@angular/core';

import { PasswordRecoveryPayload } from './password-recovery';
import { SignInCredentials } from './sign-in/sign-in.component';

export interface ModulesAuthnConfig {
  signInHandler: (payload: SignInCredentials) => void;

  // Optional: what happens when user submits password recovery
  passwordRecoveryHandler?: (payload: PasswordRecoveryPayload) => void;

  // Optional extras – logo, redirects, etc. (extend as you like)
  logoUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirectAfterLoginUrl?: string | any[];
}

export const MODULES_AUTHN_CONFIG = new InjectionToken<ModulesAuthnConfig>(
  'MODULES_AUTHN_CONFIG'
);
