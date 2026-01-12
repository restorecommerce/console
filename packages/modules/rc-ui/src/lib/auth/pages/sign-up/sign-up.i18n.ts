import { RcTranslatable } from '../../../shared';

export interface RcSignUpTranslations {
  title: RcTranslatable;
  firstNameLabel: RcTranslatable;
  lastNameLabel: RcTranslatable;
  emailLabel: RcTranslatable;
  usernameLabel: RcTranslatable;
  passwordLabel: RcTranslatable;
  confirmPasswordLabel: RcTranslatable;
  submit: RcTranslatable;
  loading: RcTranslatable;
}

export const DEFAULT_SIGN_UP_TRANSLATIONS: RcSignUpTranslations = {
  title: 'Sign Up',
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  emailLabel: 'Email',
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  submit: 'Create Account',
  loading: 'Creating account...',
};
