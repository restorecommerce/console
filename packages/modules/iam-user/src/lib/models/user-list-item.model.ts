export interface UserListItem {
  id: string;
  email: string;
  displayName: string;
  status: 'ACTIVE' | 'DISABLED';
  roles: string[];
  createdAt: Date;
}
