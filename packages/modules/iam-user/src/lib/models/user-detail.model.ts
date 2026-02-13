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
  roleNames: string[];

  sessionsCount: number;

  // ownerOrganizationId?: string;
}
