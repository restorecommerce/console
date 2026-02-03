import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as orderViewActions from './order-view.actions';
import * as orderViewSelectors from './order-view.selectors';

@Injectable()
export class OrderViewFacade {
  private readonly store = inject(Store);

  readonly order = this.store.selectSignal(orderViewSelectors.selectOrder);

  readonly loading = this.store.selectSignal(orderViewSelectors.selectLoading);

  readonly fulfilmentCount = this.store.selectSignal(
    orderViewSelectors.selectFulfilmentCount
  );

  readonly hasFulfilments = this.store.selectSignal(
    orderViewSelectors.selectHasFulfilment
  );

  readonly invoiceCount = this.store.selectSignal(
    orderViewSelectors.selectInvoiceCount
  );

  readonly hasInvoices = this.store.selectSignal(
    orderViewSelectors.selectHasInvoice
  );

  readonly error = this.store.selectSignal(orderViewSelectors.selectError);

  enterPage(orderId: string) {
    this.store.dispatch(orderViewActions.enterPage({ orderId }));
  }

  leavePage() {
    this.store.dispatch(orderViewActions.leavePage());
  }

  loadOrder(orderId: string) {
    this.store.dispatch(orderViewActions.loadOrder({ orderId }));
  }
}
