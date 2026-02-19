export interface UserSession {
  id: string; // token value (or derived id)
  name: string;

  type: 'Interactive' | 'AccessToken' | 'System' | 'Unknown';

  clientId?: string | null;

  expiresAt?: Date | null;
  isExpired: boolean;

  lastLogin?: Date | null;

  interactive: boolean;
}

export interface UserSessions {
  sessions: UserSession[];
  total: number;
  activeCount: number;
}
