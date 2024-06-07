import { IUser } from '@console-core/types';

const hasUserRole = (user: IUser, role: string): boolean =>
  !!user?.roleAssociations?.some((r) => r.role === role);

export const getUser = (user: IUser): IUser => ({
  ...user,
  fullName: `${user?.firstName} ${user?.lastName}`,
  isSuperAdministrator: hasUserRole(user, 'superadministrator-r-id'),
  isAdministrator: hasUserRole(user, 'administrator-r-id'),
  isUser: hasUserRole(user, 'user-r-id'),
});
