import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  IoRestorecommerceFulfillmentFulfillment,
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterOpOperator,
  OrderFulfillmentReadGQL,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class FulfillmentRepository {
  private readonly orderFulfilmentReadGQL = inject(OrderFulfillmentReadGQL);

  getOrderFulfillment(
    orderId: string
  ): Observable<IoRestorecommerceFulfillmentFulfillment[]> {
    const input = {
      filters: [
        {
          filters: [
            {
              field: 'references[*].instance_type',
              value: 'urn:restorecommerce:acs:model:order:Order',
              operation: IoRestorecommerceResourcebaseFilterOperation.In,
            },
            {
              field: 'references[*].instance_id',
              value: orderId,
              operation: IoRestorecommerceResourcebaseFilterOperation.In,
            },
          ],
          operator: IoRestorecommerceResourcebaseFilterOpOperator.And,
        },
      ],
    };

    return this.orderFulfilmentReadGQL
      .fetch({
        input,
      })
      .pipe(
        map((result) => {
          const items =
            result.data?.fulfillment?.fulfillment?.Read?.details?.items;

          if (!items) {
            throw new Error('Fulfillment response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Fulfilment item payload is missing');
            }

            return item.payload as IoRestorecommerceFulfillmentFulfillment;
          });
        })
      );
  }
}
