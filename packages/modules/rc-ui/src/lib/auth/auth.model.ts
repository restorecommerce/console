import { RcTranslatable } from '../shared';

export interface RcSignInTranslations {
  title: RcTranslatable;
  identifierLabel: RcTranslatable;
  passwordLabel: RcTranslatable;
  remember: RcTranslatable;
  submit: RcTranslatable;
  forgotPassword: RcTranslatable;
}

export interface RcSignUpTranslations {
  title: RcTranslatable;
  emailLabel: RcTranslatable;
  passwordLabel: RcTranslatable;
  confirmPasswordLabel: RcTranslatable;
  submit: RcTranslatable;
}

export interface RcPasswordRecoveryTranslations {
  title: RcTranslatable;
  emailLabel: RcTranslatable;
  submit: RcTranslatable;
}
