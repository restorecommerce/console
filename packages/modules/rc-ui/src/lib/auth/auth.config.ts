import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import { RcPasswordRecoveryTranslations, RcSignInTranslations } from './pages';

export type RcAuthForgotPasswordTarget =
  | { kind: 'route'; route: string | string[] }
  | { kind: 'url'; url: string };

export interface RcAuthI18nConfig {
  signIn?: Partial<RcSignInTranslations>;
  // signUp?: Partial<RcSignUpTranslations>;
  passwordRecovery?: Partial<RcPasswordRecoveryTranslations>;
}

export interface RcAuthLayoutConfig {
  branding: {
    appName: string;
    logoUrl: string;
    logoAlt?: string;
    tagline?: string;
    logoSize?: number;
  };

  i18n?: RcAuthI18nConfig;

  // forgotPasswordRoute?: string | any[];
}

export const AUTH_LAYOUT_CONFIG = new InjectionToken<RcAuthLayoutConfig>(
  'AUTH_LAYOUT_CONFIG'
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
  config: RcAuthLayoutConfig
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: AUTH_LAYOUT_CONFIG,
      useValue: config,
    },
  ]);
}
