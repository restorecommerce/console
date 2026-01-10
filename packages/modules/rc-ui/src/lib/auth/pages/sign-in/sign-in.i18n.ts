import { RcTranslatable } from '../../../shared';

export interface RcSignInTranslations {
  title: RcTranslatable;
  identifierLabel: RcTranslatable;
  passwordLabel: RcTranslatable;
  remember: RcTranslatable;
  submit: RcTranslatable;
  forgotPassword: RcTranslatable;
  loading: RcTranslatable;
  genericError: RcTranslatable;
}

export const DEFAULT_SIGN_IN_TRANSLATIONS: RcSignInTranslations = {
  title: 'Sign in',
  identifierLabel: 'Email or Username',
  passwordLabel: 'Password',
  remember: 'Stay signed in for 7 days',
  submit: 'Sign in',
  forgotPassword: 'Forgot password?',
  loading: 'Signing in…',
  genericError: 'Invalid credentials or account unavailable.',
};
