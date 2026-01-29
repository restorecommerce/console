import { inject, Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  OrderingOrderReadQuery,
  OrderListReadGQL,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class OrderRepository {
  private readonly orderListReadGQL = inject(OrderListReadGQL);

  list(
    input: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<OrderingOrderReadQuery>> {
    return this.orderListReadGQL.fetch({
      input,
    });
  }
}
