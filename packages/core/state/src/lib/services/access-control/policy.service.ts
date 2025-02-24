import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  PolicyReadGQL,
  PolicyReadQuery,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class PolicyService {
  constructor(private readonly policyReadGQL: PolicyReadGQL) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<PolicyReadQuery>> {
    return this.policyReadGQL.fetch({
      input: payload,
    });
  }
}
