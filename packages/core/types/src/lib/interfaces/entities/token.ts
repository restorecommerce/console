import { IoRestorecommerceAuthTokens } from '@console-core/graphql';

export type IAuthToken = Omit<
  IoRestorecommerceAuthTokens,
  | 'clientId'
  | 'expiresIn'
  | 'interactive'
  | 'lastLogin'
  | 'name'
  | 'scopes'
  | 'token'
  | 'type'
> & {
  clientId: string;
  /** ISO string like "2025-11-09T19:10:18.336Z" */
  expiresIn: string;
  interactive: boolean;
  /** ISO string like "2025-11-09T19:10:18.336Z" */
  lastLogin: string;
  name: string;
  scopes: string[];
  token: string;
  type: string;
};
