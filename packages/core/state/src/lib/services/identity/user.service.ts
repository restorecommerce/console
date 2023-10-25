import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IdentityUserFindByTokenGQL,
  IdentityUserFindByTokenQuery,
  IIoRestorecommerceUserFindByTokenRequest,
  IdentityUserMutateGQL,
  IdentityUserMutateMutation,
  IIoRestorecommerceUserUserList,
  IdentityUserDeleteGQL,
  IdentityUserDeleteMutation,
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
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly identityUserActivateGQL: IdentityUserActivateGQL,
    private readonly identityUserFindGQL: IdentityUserFindGQL,
    private readonly identityUserFindByTokenGQL: IdentityUserFindByTokenGQL,
    private readonly identityUserMutateGQL: IdentityUserMutateGQL,
    private readonly identityUserRequestEmailChangeGQL: IdentityUserRequestEmailChangeGQL,
    private readonly identityUserConfirmEmailChangeGQL: IdentityUserConfirmEmailChangeGQL,
    private readonly identityUserRequestPasswordChangeGQL: IdentityUserRequestPasswordChangeGQL,
    private readonly identityUserConfirmPasswordChangeGQL: IdentityUserConfirmPasswordChangeGQL,
    private readonly identityUserChangePasswordGQL: IdentityUserChangePasswordGQL,
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

  mutate(
    payload: IIoRestorecommerceUserUserList
  ): Observable<MutationResult<IdentityUserMutateMutation>> {
    return this.identityUserMutateGQL.mutate({ input: payload });
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

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<IdentityUserDeleteMutation>> {
    return this.identityUserDeleteGQL.mutate({ input: payload });
  }
}
