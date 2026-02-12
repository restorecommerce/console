import { IoRestorecommerceUserUserRole } from '@console-core/graphql';

import { UserListItem } from './user-list-item.model';

export const mapUserToListItem = (
  payload: IoRestorecommerceUserUserRole
): UserListItem => {
  return {
    id: `${payload.id}`,
    displayName: `${payload.firstName} ${payload.lastName}`,
    status: payload.active ? 'ACTIVE' : 'DISABLED',
    email: `${payload.email}`,
    roles: payload.roles?.map((role) => `${role.name}`) ?? [],
    createdAt: new Date(payload.meta?.created as string),
  };
};
