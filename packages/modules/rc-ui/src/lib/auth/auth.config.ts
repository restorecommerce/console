import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

export interface AuthBrandingConfig {
  appName: string;
  logoUrl: string;
  logoAlt?: string;
  tagline?: string;
}

export const AUTH_BRANDING_CONFIG = new InjectionToken<AuthBrandingConfig>(
  'AUTH_BRANDING_CONFIG',
);

/**
 * Host apps use this in their providers:
 *
 *   provideAuthBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
export function provideAuthBranding(
  config: AuthBrandingConfig,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: AUTH_BRANDING_CONFIG,
      useValue: config,
    },
  ]);
}
