import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  FindByTokenGQL,
  FindByTokenQuery,
  IIoRestorecommerceUserFindByTokenRequest,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private readonly findByTokenGQL: FindByTokenGQL) {}

  findUserByToken(
    payload: IIoRestorecommerceUserFindByTokenRequest
  ): Observable<ApolloQueryResult<FindByTokenQuery>> {
    return this.findByTokenGQL.fetch({
      input: payload,
    });
  }
}
