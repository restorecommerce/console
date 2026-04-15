import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as invoiceViewActions from './invoice-view.actions';
import * as invoiceViewSelectors from './invoice-view.selectors';

@Injectable()
export class InvoiceViewFacade {
  private readonly store = inject(Store);

  readonly invoice = this.store.selectSignal(
    invoiceViewSelectors.selectInvoice
  );

  readonly loading = this.store.selectSignal(
    invoiceViewSelectors.selectLoading
  );

  readonly error = this.store.selectSignal(invoiceViewSelectors.selectError);

  enterPage(invoiceId: string) {
    this.store.dispatch(invoiceViewActions.enterPage({ invoiceId }));
  }

  leavePage() {
    this.store.dispatch(invoiceViewActions.leavePage());
  }

  loadInvoice(invoiceId: string) {
    this.store.dispatch(invoiceViewActions.loadInvoice({ invoiceId }));
  }
}
