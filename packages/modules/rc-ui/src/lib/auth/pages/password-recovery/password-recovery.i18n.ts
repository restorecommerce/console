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
    title: 'Password Recovery',
    identifierLabel: 'Email or Username',
    submit: 'Reset Password',
    loading: 'Processing...',
    emailSentDescription:
      'If an account exists with the provided identifier, an email has been sent with instructions to reset your password.',
    passwordLabel: 'New Password',
    confirmPasswordLabel: 'Confirm New Password',
    success: 'Your password has been successfully reset.',
    invalidToken: {
      expired: 'This password reset link has expired.',
      used: 'This password reset link has already been used.',
      invalid: 'This password reset link is invalid.',
    },
  };
