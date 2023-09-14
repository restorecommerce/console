import { IIoRestorecommerceUserUser } from '@console-core/graphql';
import { IUser } from '@console-core/types';

export const getFullName = (user: IIoRestorecommerceUserUser): string =>
  `${user?.firstName || ''} ${user?.lastName || ''}`.trim();
export const getUser = (profile: IIoRestorecommerceUserUser): IUser => ({
  ...profile,
  fullName: getFullName(profile),
});
