import { UserRoles } from './user-role.model';
import { UserSessions } from './user-sessions.model';
import { UserStatus } from './user-status.model';

export interface UserDetail {
  id: string;
  fullName: string;
  email: string;
  username: string;

  status: UserStatus;

  // type: string;
  guest: boolean;

  defaultScope: string;

  timezoneId?: string;
  localeId?: string;

  lastAccess?: Date | null;

  createdAt?: Date;

  rolesCount: number;
  roles: UserRoles;

  sessionsCount: number;
  sessions: UserSessions;

  // ownerOrganizationId?: string;
}
