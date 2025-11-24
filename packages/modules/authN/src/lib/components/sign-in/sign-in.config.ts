import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

export interface SignInBrandingConfig {
  appName: string;
  logoUrl: string;
  logoAlt?: string;
  tagline?: string;
}

export const SIGN_IN_BRANDING_CONFIG = new InjectionToken<SignInBrandingConfig>(
  'SIGN_IN_BRANDING_CONFIG'
);

/**
 * Host apps use this in their providers:
 *
 *   provideSignInBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
export function provideSignInBranding(
  config: SignInBrandingConfig
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: SIGN_IN_BRANDING_CONFIG,
      useValue: config,
    },
  ]);
}
