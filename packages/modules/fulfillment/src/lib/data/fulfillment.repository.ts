import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  FulfillmentFulfillmentReadGQL,
  FulfillmentListReadGQL,
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceFulfillmentFulfillment,
  IoRestorecommerceResourcebaseFilterOperation,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class FulfillmentRepository {
  private readonly fulfilmentListReadGQL = inject(FulfillmentListReadGQL);
  private readonly fulfillmentReadGQL = inject(FulfillmentFulfillmentReadGQL);

  list(): Observable<IoRestorecommerceFulfillmentFulfillment[]> {
    return this.fulfilmentListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items =
            result.data?.fulfillment?.fulfillment?.Read?.details?.items;

          if (!items) {
            throw new Error('Fulfillment list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Fulfillment list item payload is missing');
            }

            return item.payload as IoRestorecommerceFulfillmentFulfillment;
          });
        })
      );
  }

  getFulfillment(
    id: string // orderId
  ): Observable<IoRestorecommerceFulfillmentFulfillment> {
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

    return this.fulfillmentReadGQL.fetch({ input }).pipe(
      map((result) => {
        const fulfillment =
          result.data?.fulfillment?.fulfillment?.Read?.details?.items?.[0]
            ?.payload;

        if (!fulfillment) {
          throw new Error('Fulfillment not found or response is malformed');
        }

        return fulfillment as IoRestorecommerceFulfillmentFulfillment;
      })
    );
  }
}
