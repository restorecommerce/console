import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
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
  IdentityUserChangePasswordGQL,
  IdentityUserChangePasswordMutation,
  IdentityUserRequestEmailChangeGQL,
  IdentityUserRequestEmailChangeMutation,
  IIoRestorecommerceUserChangeEmailRequest,
  IdentityUserConfirmEmailChangeGQL,
  IdentityUserConfirmEmailChangeMutation,
  IIoRestorecommerceUserConfirmEmailChangeRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IdentityUserActivateGQL,
  IIoRestorecommerceUserActivateRequest,
  IdentityUserActivateMutation,
  IdentityUserRequestPasswordChangeGQL,
  IdentityUserConfirmPasswordChangeGQL,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  IdentityUserRequestPasswordChangeMutation,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IdentityUserConfirmPasswordChangeMutation,
  IIoRestorecommerceResourcebaseReadRequest,
  IdentityUserReadGQL,
  IdentityUserReadQuery,
  IdentityUserMutateGQL,
  IdentityUserMutateMutation,
  IdentityUserDeleteGQL,
  IdentityUserDeleteMutation,
} from '@console-core/graphql';
import { EUserRoleAssociation, IUser } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private roleAssociationsCache: { [key: string]: string } = {};

  constructor(
    private readonly identityUserActivateGQL: IdentityUserActivateGQL,
    private readonly identityUserFindGQL: IdentityUserFindGQL,
    private readonly identityUserFindByTokenGQL: IdentityUserFindByTokenGQL,
    private readonly identityUserRequestEmailChangeGQL: IdentityUserRequestEmailChangeGQL,
    private readonly identityUserConfirmEmailChangeGQL: IdentityUserConfirmEmailChangeGQL,
    private readonly identityUserRequestPasswordChangeGQL: IdentityUserRequestPasswordChangeGQL,
    private readonly identityUserConfirmPasswordChangeGQL: IdentityUserConfirmPasswordChangeGQL,
    private readonly identityUserChangePasswordGQL: IdentityUserChangePasswordGQL,
    private readonly identityUserReadGQL: IdentityUserReadGQL,
    private readonly identityUserMutateGQL: IdentityUserMutateGQL,
    private readonly identityUserDeleteGQL: IdentityUserDeleteGQL
  ) {}

  activate(
    payload: IIoRestorecommerceUserActivateRequest
  ): Observable<MutationResult<IdentityUserActivateMutation>> {
    return this.identityUserActivateGQL.mutate({
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
  ): Observable<MutationResult<IdentityUserRequestEmailChangeMutation>> {
    return this.identityUserRequestEmailChangeGQL.mutate({ input: payload });
  }

  confirmEmailChange(
    payload: IIoRestorecommerceUserConfirmEmailChangeRequest
  ): Observable<MutationResult<IdentityUserConfirmEmailChangeMutation>> {
    return this.identityUserConfirmEmailChangeGQL.mutate({ input: payload });
  }

  requestPasswordChange(
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ): Observable<MutationResult<IdentityUserRequestPasswordChangeMutation>> {
    return this.identityUserRequestPasswordChangeGQL.mutate({
      input: payload,
    });
  }

  confirmPasswordChange(
    payload: IIoRestorecommerceUserConfirmPasswordChangeRequest
  ): Observable<MutationResult<IdentityUserConfirmPasswordChangeMutation>> {
    return this.identityUserConfirmPasswordChangeGQL.mutate({
      input: payload,
    });
  }

  passwordChange(
    payload: IIoRestorecommerceUserChangePasswordRequest
  ): Observable<MutationResult<IdentityUserChangePasswordMutation>> {
    return this.identityUserChangePasswordGQL.mutate({ input: payload });
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
  ): Observable<MutationResult<IdentityUserDeleteMutation>> {
    return this.identityUserDeleteGQL.mutate({ input: payload });
  }

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

  getUserWithRolesAndFullName(user: IUser): IUser {
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
