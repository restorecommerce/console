import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  IoRestorecommerceInvoiceInvoice,
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterOpOperator,
  OrderInvoiceReadGQL,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class InvoiceRepository {
  private readonly orderInvoiceReadGQL = inject(OrderInvoiceReadGQL);

  getOrderInvoice(
    orderId: string
  ): Observable<IoRestorecommerceInvoiceInvoice[]> {
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

    return this.orderInvoiceReadGQL
      .fetch({
        input,
      })
      .pipe(
        map((result) => {
          const items = result.data?.invoicing?.invoice?.Read?.details?.items;

          if (!items) {
            throw new Error('Invoice response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Invoice item payload is missing');
            }

            return item.payload as IoRestorecommerceInvoiceInvoice;
          });
        })
      );
  }
}
