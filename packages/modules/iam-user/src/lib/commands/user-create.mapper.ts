import { IoRestorecommerceUserUserType } from '@console-core/graphql';

import { UserCreateFormValue } from '../models';

import { CreateUserCommand } from './create-user.command';

export function mapFormToCreateUserCommand(
  form: UserCreateFormValue
): CreateUserCommand {
  return {
    id: form.id,
    name: form.username,
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    invite: form.invite,
    ...(!form.invite ? { password: form.password } : {}),
    userType: IoRestorecommerceUserUserType.OrgUser,
    defaultScope: form.defaultScope,
    roleAssociations: form.roleAssignments.map((role) => ({
      id: `${form.id.slice(0, 5)}-${role.role}`,
      role: role.role,
      attributes: [
        {
          id: role.scopeEntity,
          value: role.scopeEntity,
          attributes: [
            {
              id: 'urn:restorecommerce:acs:names:roleScopingInstance',
              value: role.scopeInstance,
            },
          ],
        },
      ],
    })),
  };
}
