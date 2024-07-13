import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceFulfillmentFulfillmentList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  FulfillmentFulfillmentDeleteMutateGQL,
  FulfillmentFulfillmentDeleteMutateMutation,
  FulfillmentFulfillmentMutateGQL,
  FulfillmentFulfillmentMutateMutation,
  FulfillmentFulfillmentReadGQL,
  FulfillmentFulfillmentReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class FulfillmentService {
  constructor(
    private readonly invoicingFulfillmentReadGQL: FulfillmentFulfillmentReadGQL,
    private readonly invoicingFulfillmentMutateGQL: FulfillmentFulfillmentMutateGQL,
    private readonly invoicingFulfillmentDeleteMutateGQL: FulfillmentFulfillmentDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<FulfillmentFulfillmentReadQuery>> {
    return this.invoicingFulfillmentReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceFulfillmentFulfillmentList
  ): Observable<MutationResult<FulfillmentFulfillmentMutateMutation>> {
    return this.invoicingFulfillmentMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<FulfillmentFulfillmentDeleteMutateMutation>> {
    return this.invoicingFulfillmentDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
