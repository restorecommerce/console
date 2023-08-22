import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  UserFindByTokenGQL,
  UserFindByTokenQuery,
  IIoRestorecommerceUserFindByTokenRequest,
  UserMutateGQL,
  UserMutateMutation,
  IIoRestorecommerceUserUserList,
  UserDeleteGQL,
  UserDeleteMutation,
  IIoRestorecommerceResourcebaseDeleteRequest,
  UserFindGQL,
  UserFindQuery,
  IIoRestorecommerceUserFindRequest,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private readonly userFindGQL: UserFindGQL,
    private readonly userFindByTokenGQL: UserFindByTokenGQL,
    private readonly userMutateGQL: UserMutateGQL,
    private readonly userDeleteGQL: UserDeleteGQL
  ) {}

  userFind(
    payload: IIoRestorecommerceUserFindRequest
  ): Observable<ApolloQueryResult<UserFindQuery>> {
    return this.userFindGQL.fetch({
      input: payload,
    });
  }

  userFindByToken(
    payload: IIoRestorecommerceUserFindByTokenRequest
  ): Observable<ApolloQueryResult<UserFindByTokenQuery>> {
    return this.userFindByTokenGQL.fetch({
      input: payload,
    });
  }

  userMutate(
    payload: IIoRestorecommerceUserUserList
  ): Observable<MutationResult<UserMutateMutation>> {
    return this.userMutateGQL.mutate({ input: payload });
  }

  userDelete(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<UserDeleteMutation>> {
    return this.userDeleteGQL.mutate({ input: payload });
  }
}
