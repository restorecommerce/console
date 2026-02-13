export interface UserOverview {
  id: string;
  fullName: string;
  email: string;
  active: boolean;
  type: string;
  guest: boolean;
  lastAccess?: Date | null;
  createdAt?: Date;
}
