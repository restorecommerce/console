import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Dictionary } from '@ngrx/entity';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IdentityUserFindByTokenGQL,
  IdentityUserFindByTokenQuery,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserUserList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IdentityUserFindGQL,
  IdentityUserFindQuery,
  IIoRestorecommerceUserFindRequest,
  IdentityUserChangePasswordMutateGQL,
  IdentityUserChangePasswordMutateMutation,
  IdentityUserRequestEmailChangeMutateGQL,
  IdentityUserRequestEmailChangeMutateMutation,
  IIoRestorecommerceUserChangeEmailRequest,
  IdentityUserConfirmEmailChangeMutateGQL,
  IdentityUserConfirmEmailChangeMutateMutation,
  IIoRestorecommerceUserConfirmEmailChangeRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IdentityUserActivateMutateGQL,
  IIoRestorecommerceUserActivateRequest,
  IdentityUserActivateMutateMutation,
  IdentityUserRequestPasswordChangeMutateGQL,
  IdentityUserConfirmPasswordChangeMutateGQL,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  IdentityUserRequestPasswordChangeMutateMutation,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IdentityUserConfirmPasswordChangeMutateMutation,
  IIoRestorecommerceResourcebaseReadRequest,
  IdentityUserReadGQL,
  IdentityUserReadQuery,
  IdentityUserMutateGQL,
  IdentityUserMutateMutation,
  IdentityUserDeleteMutateGQL,
  IdentityUserDeleteMutateMutation,
  IoRestorecommerceAttributeAttribute,
  IoRestorecommerceAuthRoleAssociation,
} from '@console-core/graphql';
import {
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  IUser,
} from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private roleAssociationsFormattedCache: Record<string, string> = {};
  private roleAssociationsRolesCache: Record<string, IRole[]> = {};
  private roleAssociationsScopingInstancesCache: Record<
    string,
    IRoleAssociationScopingInstance[]
  > = {};

  constructor(
    private readonly identityUserActivateMutateGQL: IdentityUserActivateMutateGQL,
    private readonly identityUserFindGQL: IdentityUserFindGQL,
    private readonly identityUserFindByTokenGQL: IdentityUserFindByTokenGQL,
    private readonly identityUserRequestEmailChangeMutateGQL: IdentityUserRequestEmailChangeMutateGQL,
    private readonly identityUserConfirmEmailChangeMutateGQL: IdentityUserConfirmEmailChangeMutateGQL,
    private readonly identityUserRequestPasswordChangeMutateGQL: IdentityUserRequestPasswordChangeMutateGQL,
    private readonly identityUserConfirmPasswordChangeMutateGQL: IdentityUserConfirmPasswordChangeMutateGQL,
    private readonly identityUserChangePasswordMutateGQL: IdentityUserChangePasswordMutateGQL,
    private readonly identityUserReadGQL: IdentityUserReadGQL,
    private readonly identityUserMutateGQL: IdentityUserMutateGQL,
    private readonly identityUserDeleteMutateGQL: IdentityUserDeleteMutateGQL
  ) {}

  activate(
    payload: IIoRestorecommerceUserActivateRequest
  ): Observable<MutationResult<IdentityUserActivateMutateMutation>> {
    return this.identityUserActivateMutateGQL.mutate({
      input: payload,
    });
  }

  find(
    payload: IIoRestorecommerceUserFindRequest
  ): Observable<ApolloQueryResult<IdentityUserFindQuery>> {
    return this.identityUserFindGQL.fetch({
      input: payload,
    });
  }

  findByToken(
    payload: IIoRestorecommerceUserFindByTokenRequest
  ): Observable<ApolloQueryResult<IdentityUserFindByTokenQuery>> {
    return this.identityUserFindByTokenGQL.fetch({
      input: payload,
    });
  }

  requestEmailChange(
    payload: IIoRestorecommerceUserChangeEmailRequest
  ): Observable<MutationResult<IdentityUserRequestEmailChangeMutateMutation>> {
    return this.identityUserRequestEmailChangeMutateGQL.mutate({
      input: payload,
    });
  }

  confirmEmailChange(
    payload: IIoRestorecommerceUserConfirmEmailChangeRequest
  ): Observable<MutationResult<IdentityUserConfirmEmailChangeMutateMutation>> {
    return this.identityUserConfirmEmailChangeMutateGQL.mutate({
      input: payload,
    });
  }

  requestPasswordChange(
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ): Observable<
    MutationResult<IdentityUserRequestPasswordChangeMutateMutation>
  > {
    return this.identityUserRequestPasswordChangeMutateGQL.mutate({
      input: payload,
    });
  }

  confirmPasswordChange(
    payload: IIoRestorecommerceUserConfirmPasswordChangeRequest
  ): Observable<
    MutationResult<IdentityUserConfirmPasswordChangeMutateMutation>
  > {
    return this.identityUserConfirmPasswordChangeMutateGQL.mutate({
      input: payload,
    });
  }

  passwordChange(
    payload: IIoRestorecommerceUserChangePasswordRequest
  ): Observable<MutationResult<IdentityUserChangePasswordMutateMutation>> {
    return this.identityUserChangePasswordMutateGQL.mutate({ input: payload });
  }

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<IdentityUserReadQuery>> {
    return this.identityUserReadGQL.fetch({ input: payload });
  }

  mutate(
    payload: IIoRestorecommerceUserUserList
  ): Observable<MutationResult<IdentityUserMutateMutation>> {
    return this.identityUserMutateGQL.mutate({ input: payload });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<IdentityUserDeleteMutateMutation>> {
    return this.identityUserDeleteMutateGQL.mutate({ input: payload });
  }

  getUserFormatted(user: IUser): IUser {
    return {
      ...user,
      fullName:
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : 'N/A',
      locale: {
        ...user.locale,
        name: user.locale?.name ?? user.locale?.id ?? null,
      },
      timezone: {
        ...user.timezone,
        name: user.timezone?.name ?? user.locale?.id ?? null,
      },
      roles: user.roles ?? [],
      roleAssociations: user.roleAssociations ?? [],
    };
  }

  getRoleAssociationsRoles(user: IUser, rolesHash: Dictionary<IRole>): IRole[] {
    const cacheKey = user.id + user.meta.modified + JSON.stringify(rolesHash);

    if (this.roleAssociationsRolesCache[cacheKey]) {
      return this.roleAssociationsRolesCache[cacheKey] as IRole[];
    }

    const roles: IRole[] = [];

    user.roleAssociations?.forEach((roleAssociation) => {
      if (!roleAssociation.role) {
        return;
      }
      const role = rolesHash[roleAssociation.role ?? ''];
      if (role) {
        roles.push(role);
      } else {
        console.warn(
          `Role with ID "${roleAssociation.role}" not found for user "${user.id}"`
        );
        roles.push({
          id: roleAssociation.role ?? 'N/A',
          name: 'N/A',
          description: 'N/A',
          assignableByRoles: [],
          meta: {
            id: roleAssociation.role ?? 'N/A',
            created: 'N/A',
            createdBy: 'N/A',
            modified: 'N/A',
            modifiedBy: 'N/A',
          },
        });
      }
    });

    const uniqueRoles = [...new Set(roles)];

    uniqueRoles.sort((a, b) => a.name.localeCompare(b.name));
    this.roleAssociationsRolesCache[cacheKey] = uniqueRoles;
    return uniqueRoles;
  }

  getRoleAssociationsScopingInstances(
    user: IUser,
    rolesHash: Dictionary<IRole>,
    organizationsHash: Dictionary<IOrganization>
  ): IRoleAssociationScopingInstance[] {
    const cacheKey =
      user.id +
      user.meta.modified +
      JSON.stringify(rolesHash) +
      JSON.stringify(organizationsHash);

    if (this.roleAssociationsScopingInstancesCache[cacheKey]) {
      return this.roleAssociationsScopingInstancesCache[
        cacheKey
      ] as IRoleAssociationScopingInstance[];
    }

    const results: IRoleAssociationScopingInstance[] = [];

    const recursiveSearch = (
      roleAssociation: IoRestorecommerceAuthRoleAssociation,
      data:
        | IoRestorecommerceAttributeAttribute
        | IoRestorecommerceAttributeAttribute[]
    ): void => {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          recursiveSearch(roleAssociation, item);
        });
      } else if (
        roleAssociation.role &&
        data.id === 'urn:restorecommerce:acs:names:roleScopingInstance' &&
        data.value
      ) {
        results.push({
          role: rolesHash[roleAssociation.role] ?? null,
          organization: organizationsHash[data.value] ?? null,
        });
      } else if (data.attributes) {
        recursiveSearch(roleAssociation, data.attributes);
      }
    };

    user.roleAssociations?.forEach((roleAssociation) => {
      if (roleAssociation.attributes) {
        recursiveSearch(roleAssociation, roleAssociation.attributes);
      }
    });

    this.roleAssociationsScopingInstancesCache[cacheKey] = results;

    return results;
  }
}
