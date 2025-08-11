import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceInvoiceInvoiceList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as invoiceActions from './invoice.actions';
import * as invoiceSelectors from './invoice.selectors';

@Injectable()
export class InvoiceFacade {
  // Selectors
  readonly ids$ = this.store.select(invoiceSelectors.selectInvoiceIds);
  readonly entities$ = this.store.select(
    invoiceSelectors.selectInvoiceEntities
  );
  readonly all$ = this.store.select(invoiceSelectors.selectInvoiceAll);
  readonly total$ = this.store.select(invoiceSelectors.selectInvoiceTotal);
  readonly selectedId$ = this.store.select(
    invoiceSelectors.selectInvoiceSelectedId
  );
  readonly selected$ = this.store.select(
    invoiceSelectors.selectInvoiceSelected
  );
  readonly actionStatus$ = this.store.select(
    invoiceSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(invoiceSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(invoiceActions.invoiceReadRequest({ payload }));
  setSelectedId = (_payload: string | null) => null;
  create = (_payload: IIoRestorecommerceInvoiceInvoiceList) => null;
  update = (_payload: IIoRestorecommerceInvoiceInvoiceList) => null;
  remove = (_payload: { id: string }) => null;

  constructor(private readonly store: Store) {}
}
