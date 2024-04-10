import { IUser } from '@console-core/types';

const getUserFullName = (user: IUser): string =>
  `${user?.firstName} ${user?.lastName}`.trim();

const hasUserRole = (user: IUser, role: string): boolean =>
  !!user?.roleAssociations?.some((r) => r.role === role);

export const getUser = (user: IUser): IUser => ({
  ...user,
  fullName: getUserFullName(user),
  isSuperAdministrator: hasUserRole(user, 'superadministrator-r-id'),
  isAdministrator: hasUserRole(user, 'administrator-r-id'),
  isUser: hasUserRole(user, 'user-r-id'),
});
