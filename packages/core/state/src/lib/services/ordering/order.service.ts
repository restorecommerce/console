import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  OrderingOrderDeleteGQL,
  OrderingOrderDeleteMutation,
  OrderingOrderMutateGQL,
  OrderingOrderMutateMutation,
  OrderingOrderReadGQL,
  OrderingOrderReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private readonly orderingOrderReadGQL: OrderingOrderReadGQL,
    private readonly orderingOrderMutateGQL: OrderingOrderMutateGQL,
    private readonly orderingOrderDeleteGQL: OrderingOrderDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<OrderingOrderReadQuery>> {
    return this.orderingOrderReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceOrderOrderList
  ): Observable<MutationResult<OrderingOrderMutateMutation>> {
    return this.orderingOrderMutateGQL.mutate({
      input: payload,
    });
  }

  delete(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<OrderingOrderDeleteMutation>> {
    return this.orderingOrderDeleteGQL.mutate({
      input: payload,
    });
  }
}
