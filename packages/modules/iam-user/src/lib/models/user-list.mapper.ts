import { IoRestorecommerceUserUserRole } from '@console-core/graphql';

import { UserListItem } from './user-list-item.model';
import { UserStatus } from './user-status.model';

export const mapUserToListItem = (
  payload: IoRestorecommerceUserUserRole
): UserListItem => {
  return {
    id: `${payload.id}`,
    displayName: `${payload.firstName} ${payload.lastName}`,
    status: payload.active ? UserStatus.ACTIVE : UserStatus.DISABLED,
    email: `${payload.email}`,
    roles: payload.roles?.map((role) => `${role.name}`) ?? [],
    createdAt: new Date(payload.meta?.created as string),
  };
};
