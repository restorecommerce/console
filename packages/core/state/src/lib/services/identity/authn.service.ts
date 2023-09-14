import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import { AUTH } from '@console-core/config';
import {
  IdentityUserActivateGQL,
  IdentityUserActivateMutation,
  IdentityUserConfirmPasswordChangeGQL,
  IdentityUserConfirmPasswordChangeMutation,
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  IdentityUserRegisterGQL,
  IdentityUserRegisterMutation,
  IdentityUserRequestPasswordChangeGQL,
  IdentityUserRequestPasswordChangeMutation,
} from '@console-core/graphql';
import {
  IAuthnTokenSignInPayload,
  IAuthnTokenSignInResponse,
} from '@console-core/types';

import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthnService {
  private readonly headers = new HttpHeaders(AUTH.headers);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly apiService: ApiService,
    private readonly identityUserRegisterGQL: IdentityUserRegisterGQL,
    private readonly identityUserActivateGQL: IdentityUserActivateGQL,
    private readonly identityUserRequestPasswordChangeGQL: IdentityUserRequestPasswordChangeGQL,
    private readonly identityUserConfirmPasswordChangeGQL: IdentityUserConfirmPasswordChangeGQL
  ) {}

  signUp(
    payload: IIoRestorecommerceUserRegisterRequest
  ): Observable<MutationResult<IdentityUserRegisterMutation>> {
    return this.identityUserRegisterGQL.mutate({
      input: payload,
    });
  }

  activate(
    payload: IIoRestorecommerceUserActivateRequest
  ): Observable<MutationResult<IdentityUserActivateMutation>> {
    return this.identityUserActivateGQL.mutate({
      input: payload,
    });
  }

  signIn(
    payload: IAuthnTokenSignInPayload
  ): Observable<IAuthnTokenSignInResponse> {
    const body = new URLSearchParams();
    body.set('identifier', payload?.identifier || '');
    body.set('password', payload?.password || '');
    body.set('grant_type', 'password');
    body.set('scope', 'openid');

    return this.httpClient.post<IAuthnTokenSignInResponse>(
      this.apiService.getEndpoint('token'),
      body.toString(),
      {
        headers: this.headers,
      }
    );
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
}
