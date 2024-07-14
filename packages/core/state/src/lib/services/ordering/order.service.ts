import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  OrderingOrderDeleteMutateGQL,
  OrderingOrderDeleteMutateMutation,
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
    private readonly orderingOrderDeleteMutateGQL: OrderingOrderDeleteMutateGQL
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

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<OrderingOrderDeleteMutateMutation>> {
    return this.orderingOrderDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
