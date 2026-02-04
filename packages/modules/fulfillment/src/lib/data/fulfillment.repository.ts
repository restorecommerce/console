import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  FulfillmentListReadGQL,
  IoRestorecommerceFulfillmentFulfillment,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class FulfillmentRepository {
  private readonly fulfilmentListReadGQL = inject(FulfillmentListReadGQL);

  list(): Observable<IoRestorecommerceFulfillmentFulfillment[]> {
    return this.fulfilmentListReadGQL.fetch().pipe(
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
}
