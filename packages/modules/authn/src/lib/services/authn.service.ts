import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  ActivateGQL,
  ActivateMutation,
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserLoginRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  LoginGQL,
  LoginMutation,
  RegisterGQL,
  RegisterMutation,
  RequestPasswordChangeGQL,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthnService {
  constructor(
    private readonly registerGQL: RegisterGQL,
    private readonly activateGQL: ActivateGQL,
    private readonly loginGQL: LoginGQL,
    private readonly requestPasswordChangeGQL: RequestPasswordChangeGQL
  ) {}

  register(
    payload: IIoRestorecommerceUserRegisterRequest
  ): Observable<MutationResult<RegisterMutation>> {
    return this.registerGQL.mutate({
      input: payload,
    });
  }

  activate(
    payload: IIoRestorecommerceUserActivateRequest
  ): Observable<MutationResult<ActivateMutation>> {
    return this.activateGQL.mutate({
      input: payload,
    });
  }

  login(
    payload: IIoRestorecommerceUserLoginRequest
  ): Observable<MutationResult<LoginMutation>> {
    return this.loginGQL.mutate({
      input: payload,
    });
  }

  requestPasswordChange(
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) {
    return this.requestPasswordChangeGQL.mutate({
      input: payload,
    });
  }
}
