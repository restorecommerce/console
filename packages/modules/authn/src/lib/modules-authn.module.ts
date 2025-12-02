import { NgModule } from '@angular/core';
import {
  RsAuthModule,
  SIGN_IN_BRANDING_CONFIG,
  SignInBrandingConfig,
  MODULES_AUTHN_CONFIG,
  ModulesAuthnConfig,
} from '@console/rs-ui';

import { AuthnFacade } from '@console-core/state';

@NgModule({
  imports: [RsAuthModule],
  providers: [
    {
      provide: MODULES_AUTHN_CONFIG,
      deps: [AuthnFacade],
      useFactory: (authFacade: AuthnFacade): ModulesAuthnConfig => ({
        signInHandler: ({ identifier, password }) =>
          authFacade.signIn({ identifier, password }),
        passwordRecoveryHandler: ({ identifier }) =>
          authFacade.passwordRecovery({ identifier }),
      }),
    },
    {
      provide: SIGN_IN_BRANDING_CONFIG,
      useValue: <SignInBrandingConfig>{
        appName: 'Restore Commerce Console', // or APP.name
        logoUrl: 'assets/images/restore_commerce_logo_square.png',
        logoAlt: 'RC Logo',
      },
    },
  ],
})
export class ModulesAuthnModule {}
