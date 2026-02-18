import {
  IoRestorecommerceAttributeAttribute,
  IoRestorecommerceRoleRole,
  IoRestorecommerceUserUserRole,
} from '@console-core/graphql';

import { UserRole, UserRoles } from './user-role.model';

export function mapUserRolesVM(
  payload: IoRestorecommerceUserUserRole
): UserRoles {
  const roles = (payload.roles ?? []).map(
    (role: IoRestorecommerceRoleRole, index: number): UserRole => {
      const assoc = payload.roleAssociations?.[index];

      return {
        id: assoc?.role ?? role.id ?? '',
        name: `${role.name}`,
        description: `${role.description}`,

        associationId: assoc?.id ?? '',

        scopeEntities:
          assoc?.attributes?.map(
            (a: IoRestorecommerceAttributeAttribute) => a.value ?? ''
          ) ?? [],

        assignableByRoles: role.assignableByRoles ?? [],
      };
    }
  );

  return {
    roles,
    total: roles.length,
  };
}
