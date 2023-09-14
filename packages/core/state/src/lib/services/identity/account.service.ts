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
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private readonly identityUserFindGQL: IdentityUserFindGQL,
    private readonly identityUserFindByTokenGQL: IdentityUserFindByTokenGQL,
    private readonly identityUserMutateGQL: IdentityUserMutateGQL,
    private readonly identityUserDeleteGQL: IdentityUserDeleteGQL
  ) {}

  userFind(
    payload: IIoRestorecommerceUserFindRequest
  ): Observable<ApolloQueryResult<IdentityUserFindQuery>> {
    return this.identityUserFindGQL.fetch({
      input: payload,
    });
  }

  userFindByToken(
    payload: IIoRestorecommerceUserFindByTokenRequest
  ): Observable<ApolloQueryResult<IdentityUserFindByTokenQuery>> {
    return this.identityUserFindByTokenGQL.fetch({
      input: payload,
    });
  }

  userMutate(
    payload: IIoRestorecommerceUserUserList
  ): Observable<MutationResult<IdentityUserMutateMutation>> {
    return this.identityUserMutateGQL.mutate({ input: payload });
  }

  userDelete(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<IdentityUserDeleteMutation>> {
    return this.identityUserDeleteGQL.mutate({ input: payload });
  }
}
