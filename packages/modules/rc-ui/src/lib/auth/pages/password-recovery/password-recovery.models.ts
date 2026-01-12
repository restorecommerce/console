export type RcPasswordRecoveryState =
  | { status: 'idle' }
  | { status: 'requesting' }
  | { status: 'emailSent' }
  | { status: 'settingPassword' }
  | { status: 'invalidToken'; reason: 'expired' | 'used' | 'invalid' }
  | { status: 'success' };
