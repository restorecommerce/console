import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import { AUTH } from '@console-core/config';
import {
  ActivateGQL,
  ActivateMutation,
  ConfirmPasswordChangeGQL,
  ConfirmPasswordChangeMutation,
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  RegisterGQL,
  RegisterMutation,
  RequestPasswordChangeGQL,
  RequestPasswordChangeMutation,
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
    private readonly registerGQL: RegisterGQL,
    private readonly activateGQL: ActivateGQL,
    private readonly requestPasswordChangeGQL: RequestPasswordChangeGQL,
    private readonly confirmPasswordChangeGQL: ConfirmPasswordChangeGQL
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
  ): Observable<MutationResult<RequestPasswordChangeMutation>> {
    return this.requestPasswordChangeGQL.mutate({
      input: payload,
    });
  }

  confirmPasswordChange(
    payload: IIoRestorecommerceUserConfirmPasswordChangeRequest
  ): Observable<MutationResult<ConfirmPasswordChangeMutation>> {
    return this.confirmPasswordChangeGQL.mutate({
      input: payload,
    });
  }
}
