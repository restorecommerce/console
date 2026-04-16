import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  InvoiceListReadGQL,
  InvoicingInvoiceReadGQL,
  IoRestorecommerceInvoiceInvoice,
  IoRestorecommerceResourcebaseFilterOperation,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class InvoiceRepository {
  private readonly invoiceListReadGQL = inject(InvoiceListReadGQL);
  private readonly invoiceReadGQL = inject(InvoicingInvoiceReadGQL);

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

  getInvoice(
    id: string // invoiceId
  ): Observable<IoRestorecommerceInvoiceInvoice> {
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

    return this.invoiceReadGQL.fetch({ input }).pipe(
      map((result) => {
        const invoice =
          result.data?.invoicing?.invoice?.Read?.details?.items?.[0]?.payload;

        if (!invoice) {
          throw new Error('Fulfillment not found or response is malformed');
        }

        return invoice as IoRestorecommerceInvoiceInvoice;
      })
    );
  }
}
