import { IIoRestorecommerceUserUser } from '@console-core/graphql';
import { IUser } from '@console-core/types';

export const getFullName = (user: IIoRestorecommerceUserUser | null): string =>
  `${user?.firstName || ''} ${user?.lastName || ''}`.trim();
export const getUser = (
  profile: IIoRestorecommerceUserUser | null
): IUser | null =>
  profile
    ? {
        ...profile,
        fullName: getFullName(profile),
      }
    : null;
