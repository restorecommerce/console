import {
  IoRestorecommerceAuthTokens,
  IoRestorecommerceUserUserRole,
} from '@console-core/graphql';

import { UserSession, UserSessions } from './user-sessions.model';

function resolveTokenType(
  token: IoRestorecommerceAuthTokens
): UserSession['type'] {
  if (token.interactive) return 'Interactive';
  if (token.type === 'AccessToken') return 'AccessToken';
  if (!token.clientId && !token.interactive) return 'System';
  return 'Unknown';
}

function resolveExpiration(expiresIn?: string | null) {
  if (!expiresIn) return null;

  const date = new Date(expiresIn);
  return isNaN(date.getTime()) ? null : date;
}

export function mapUserSessions(
  payload: IoRestorecommerceUserUserRole
): UserSessions {
  console.log('here is my tokens', payload.tokens);

  const now = new Date();

  const sessions = (payload.tokens ?? []).map(
    (token: IoRestorecommerceAuthTokens) => {
      const expiration = (token.expiresIn ?? '') as string;
      const expiresAt = resolveExpiration(expiration);

      return {
        id: `${token.token}`,
        name: `${token.name}`,

        type: resolveTokenType(token),

        clientId: token.clientId ?? null,

        expiresAt,
        isExpired: expiresAt ? expiresAt.getTime() < now.getTime() : false,

        lastLogin: token.lastLogin ? new Date(token.lastLogin as string) : null,

        interactive: !!token.interactive,
      };
    }
  );

  console.log('sessions', sessions);

  return {
    sessions,
    total: sessions.length,
    activeCount: sessions.filter((s) => !s.isExpired).length,
  };
}
