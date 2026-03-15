import { IoRestorecommerceUserUserRole } from '@console-core/graphql';

import { UserUpdateFormValue } from './user-update-form.model';

export function mapUserUpdateFormValue(
  user: IoRestorecommerceUserUserRole
): UserUpdateFormValue {
  return {
    id: `${user.id}`,
    firstName: `${user.firstName}`,
    lastName: `${user.lastName}`,
    email: `${user.email}`,
    username: `${user.name}`,
    defaultScope: `${user.defaultScope}`,
  };
}
