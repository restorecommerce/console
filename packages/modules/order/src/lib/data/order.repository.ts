import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceOrderOrder,
  IoRestorecommerceResourcebaseFilterOperation,
  OrderingOrderReadGQL,
  OrderListReadGQL,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class OrderRepository {
  private readonly orderListReadGQL = inject(OrderListReadGQL);
  private readonly orderViewReadGQL = inject(OrderingOrderReadGQL);

  // TODO has input that contains filter, sort and pagination params...
  list(): Observable<IoRestorecommerceOrderOrder[]> {
    return this.orderListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items = result.data?.ordering?.order?.Read?.details?.items;

          if (!items) {
            throw new Error('Order list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Order list item payload is missing');
            }

            return item.payload as IoRestorecommerceOrderOrder;
          });
        })
      );
  }

  getOrder(
    id: string // orderId
  ): Observable<IoRestorecommerceOrderOrder> {
    // TODO Should be a general util...
    const input: IIoRestorecommerceResourcebaseReadRequest = {
      filters: [
        {
          filters: [
            {
              field: 'id',
              value: id,
              operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
            },
          ],
        },
      ],
    };

    return this.orderViewReadGQL.fetch({ input }).pipe(
      map((result) => {
        const order =
          result.data?.ordering?.order?.Read?.details?.items?.[0]?.payload;

        if (!order) {
          throw new Error('Order not found or response is malformed');
        }

        return order as IoRestorecommerceOrderOrder;
      })
    );
  }
}
