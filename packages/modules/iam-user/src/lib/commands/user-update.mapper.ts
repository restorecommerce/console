import { IoRestorecommerceUserUserType } from '@console-core/graphql';

import { UserUpdateFormValue } from '../models';

import { UpdateUserCommand } from './update-user.command';

export function mapFormToUpdateUserCommand(
  form: UserUpdateFormValue
): UpdateUserCommand {
  return {
    id: form.id,
    name: form.username,
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    userType: IoRestorecommerceUserUserType.OrgUser,
    defaultScope: form.defaultScope,
  };
}
