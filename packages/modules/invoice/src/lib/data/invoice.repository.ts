import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  InvoiceListReadGQL,
  IoRestorecommerceInvoiceInvoice,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class InvoiceRepository {
  private readonly invoiceListReadGQL = inject(InvoiceListReadGQL);

  list(): Observable<IoRestorecommerceInvoiceInvoice[]> {
    return this.invoiceListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items = result.data?.invoicing?.invoice?.Read?.details?.items;

          if (!items) {
            throw new Error('Invoice list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('Invoice list item payload is missing');
            }

            return item.payload as IoRestorecommerceInvoiceInvoice;
          });
        })
      );
  }
}
