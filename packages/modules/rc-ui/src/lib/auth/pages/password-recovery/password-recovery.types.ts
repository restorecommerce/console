export interface RcPasswordRecoveryConfig {
  branding: {
    appName: string;
    logoUrl?: string;
    logoAlt?: string;
    logoSize?: number;
  };

  i18n: {
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
  };
}

export type RcPasswordRecoveryState =
  | { status: 'idle' }
  | { status: 'requesting' }
  | { status: 'emailSent' }
  | { status: 'settingPassword' }
  | { status: 'invalidToken'; reason: 'expired' | 'used' | 'invalid' }
  | { status: 'success' };
