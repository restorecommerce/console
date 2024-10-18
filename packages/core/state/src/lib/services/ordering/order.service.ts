import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  OrderingInvoiceCreateGQL,
  OrderingInvoiceCreateMutation,
  IIoRestorecommerceOrderOrderingInvoiceRequestList,
  OrderingOrderDeleteMutateGQL,
  OrderingOrderDeleteMutateMutation,
  OrderingOrderMutateGQL,
  OrderingOrderMutateMutation,
  OrderingOrderReadGQL,
  OrderingOrderReadQuery,
  CreateOrderFulfillmentGQL,
  CreateOrderFulfillmentMutation,
  IIoRestorecommerceAddressShippingAddress,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private readonly orderingOrderReadGQL: OrderingOrderReadGQL,
    private readonly orderingOrderMutateGQL: OrderingOrderMutateGQL,
    private readonly orderingOrderDeleteMutateGQL: OrderingOrderDeleteMutateGQL,
    private readonly orderingInvoiceCreateGQL: OrderingInvoiceCreateGQL,
    private readonly orderingFulfilmentGQL: CreateOrderFulfillmentGQL
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

  createOrderInvoice(
    payload: string
  ): Observable<MutationResult<OrderingInvoiceCreateMutation>> {
    const orderInvoiceInput: IIoRestorecommerceOrderOrderingInvoiceRequestList =
      {};
    orderInvoiceInput.items = [
      {
        sections: [
          {
            orderId: payload,
            selectedItems: [],
          },
        ],
      },
    ];

    return this.orderingInvoiceCreateGQL.mutate({
      input: orderInvoiceInput,
    });
  }

  createFulfilment(payload: {
    id: string;
    senderAddress: IIoRestorecommerceAddressShippingAddress;
  }): Observable<MutationResult<CreateOrderFulfillmentMutation>> {
    return this.orderingFulfilmentGQL.mutate({
      input: {
        items: [
          {
            orderId: payload.id,
            // selectedItems: [],
            senderAddress: {
              address: {
                buildingNumber: payload.senderAddress.address?.buildingNumber,
                street: payload.senderAddress.address?.buildingNumber,
                locality: payload.senderAddress.address?.locality,
                region: payload.senderAddress.address?.region,
                postcode: payload.senderAddress.address?.postcode,
                countryId: payload.senderAddress.address?.countryId,
              },
            },
          },
        ],
      },
    });
  }
}
