export interface RcPasswordRecoveryTranslations {
  title: string;
  identifierLabel: string;
  submit: string;
  loading: string;
  emailSentDescription: string;
  passwordLabel: string;
  confirmPasswordLabel: string;
  success: string;
  invalidToken: {
    expired: string;
    used: string;
    invalid: string;
  };
}

export const DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS: RcPasswordRecoveryTranslations =
  {
    title: '',
    identifierLabel: '',
    submit: '',
    loading: '',
    emailSentDescription: '',
    passwordLabel: '',
    confirmPasswordLabel: '',
    success: '',
    invalidToken: {
      expired: '',
      used: '',
      invalid: '',
    },
  };
