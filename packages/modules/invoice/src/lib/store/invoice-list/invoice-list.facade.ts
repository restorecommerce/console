import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as invoiceListActions from './invoice-list.actions';
import * as invoiceListSelectors from './invoice-list.selectors';

@Injectable()
export class InvoiceListFacade {
  private readonly store = inject(Store);

  readonly invoices = this.store.selectSignal(
    invoiceListSelectors.selectInvoiceListItems
  );

  readonly error = this.store.selectSignal(
    invoiceListSelectors.selectInvoiceListError
  );

  loadList() {
    this.store.dispatch(invoiceListActions.loadInvoiceList());
  }
}
