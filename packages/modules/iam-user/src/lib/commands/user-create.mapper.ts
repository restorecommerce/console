import { IoRestorecommerceUserUserType } from '@console-core/graphql';

import { UserCreateFormValue } from '../models';

import { CreateUserCommand } from './create-user.command';

type AuthenticatedUserInviteMeta = {
  firstName: string;
  lastName: string;
  username: string;
};

export function mapFormToCreateUserCommand(
  form: UserCreateFormValue,
  authenticatedUser?: AuthenticatedUserInviteMeta
): CreateUserCommand {
  const userId = form.id.slice(0, 5);

  if (form.invite && !authenticatedUser) {
    throw new Error(
      'Authenticated user is required when creating an invited user.'
    );
  }

  return {
    id: form.id,
    name: form.username,
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    invite: form.invite,
    ...(!form.invite
      ? { password: form.password }
      : {
          invitedByUserFirstName: authenticatedUser?.firstName ?? '',
          invitedByUserLastName: authenticatedUser?.lastName ?? '',
          invitedByUserName: authenticatedUser?.username ?? '',
        }),

    userType: IoRestorecommerceUserUserType.OrgUser,
    defaultScope: form.defaultScope,
    roleAssociations: [
      // Implicitly add user-r-id for the user himself...
      // Redundant, an antipattern to add it from the UI
      {
        id: `${userId}-user-r-id`,
        role: 'user-r-id',
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
      },
      ...form.roleAssignments.map((role) => ({
        id: `${userId}-${role.role}`,
        role: role.role,
        attributes: [
          {
            id: 'urn:restorecommerce:acs:names:roleScopingEntity',
            value: 'urn:restorecommerce:acs:model:organization.Organization',
            attributes: [
              {
                id: 'urn:restorecommerce:acs:names:roleScopingInstance',
                value: role.scopeInstance,
              },
            ],
          },
        ],
      })),
    ],
  };
}
