import { UserStatus } from './user-status.model';

export interface UserListItem {
  id: string;
  email: string;
  displayName: string;
  status: UserStatus;
  roles: string[];
  createdAt: Date;
}
