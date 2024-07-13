import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import { AUTH } from '@console-core/config';
import {
  IIoRestorecommerceUserRegisterRequest,
  IdentityUserRegisterMutateGQL,
  IdentityUserRegisterMutateMutation,
} from '@console-core/graphql';
import {
  IAuthnTokenSignInPayload,
  IAuthnTokenSignInResponse,
  IAuthnTokenSignOutPayload,
} from '@console-core/types';

import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthnService {
  private readonly headers = new HttpHeaders(AUTH(this.oidcKey));

  constructor(
    @Inject('oidcKey') private oidcKey: string,
    private readonly httpClient: HttpClient,
    private readonly apiService: ApiService,
    private readonly identityUserRegisterGQL: IdentityUserRegisterMutateGQL
  ) {}

  signUp(
    payload: IIoRestorecommerceUserRegisterRequest
  ): Observable<MutationResult<IdentityUserRegisterMutateMutation>> {
    return this.identityUserRegisterGQL.mutate({
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

  signOut(payload: IAuthnTokenSignOutPayload): Observable<unknown> {
    const body = new URLSearchParams();
    body.set('token', payload.token);
    return this.httpClient.post(
      this.apiService.getEndpoint('tokenRevocation'),
      body.toString(),
      {
        headers: this.headers,
      }
    );
  }
}
