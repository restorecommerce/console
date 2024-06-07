import { Injectable } from '@angular/core';

import { EUserRoleAssociation, IUser } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private roleAssociationsCache: { [key: string]: string } = {};

  getRoleAssociations(user: IUser): string {
    const cacheKey = user.id + user.meta.modified;

    if (this.roleAssociationsCache[cacheKey]) {
      return this.roleAssociationsCache[cacheKey];
    }

    const result = user.roleAssociations.length
      ? [...new Set(user.roleAssociations.map((ra) => ra.role))]
          .map(
            (ra) =>
              EUserRoleAssociation[ra as keyof typeof EUserRoleAssociation]
          )
          .sort((a, b) => a.localeCompare(b))
          .join(', ')
      : '';

    this.roleAssociationsCache[cacheKey] = result;

    return result;
  }

  enrichUserWithRolesAndFullName(user: IUser): IUser {
    return {
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
      isSuperAdministrator: this.hasUserRoleAssociations(
        user,
        'superadministrator-r-id'
      ),
      isAdministrator: this.hasUserRoleAssociations(user, 'administrator-r-id'),
      isUser: this.hasUserRoleAssociations(user, 'user-r-id'),
    };
  }

  private hasUserRoleAssociations(user: IUser, roleId: string): boolean {
    return !!user.roleAssociations.some((ra) => ra.role === roleId);
  }
}
