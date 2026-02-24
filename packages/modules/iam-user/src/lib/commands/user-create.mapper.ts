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
    // userType: 'ORG_USER',

    roleAssociations: form.roles.map((role) => ({
      id: role.associationId,
      role: role.roleId,
      attributes: [
        {
          id: 'urn:restorecommerce:acs:names:roleScopingEntity',
          value: 'urn:restorecommerce:acs:model:user.User',
          attributes: [
            {
              id: 'urn:restorecommerce:acs:names:roleScopingInstance',
              value: form.id,
            },
          ],
        },
      ],
    })),
  };
}
