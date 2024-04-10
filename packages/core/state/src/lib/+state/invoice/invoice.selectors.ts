import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IInvoice, IInvoiceState } from '@console-core/types';

import { adapter } from './invoice.reducer';

export const selectInvoice = createFeatureSelector<IInvoiceState>(
  STORE.states.invoiceState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectInvoiceIds = createSelector(selectInvoice, selectIds);

export const selectInvoiceEntities = createSelector(
  selectInvoice,
  selectEntities
);

export const selectInvoiceAll = createSelector(selectInvoice, selectAll);

export const selectInvoiceTotal = createSelector(selectInvoice, selectTotal);

export const selectInvoiceSelectedId = createSelector(
  selectInvoice,
  (state: IInvoiceState) => state.selectedId
);

export const selectInvoiceSelected = createSelector(
  selectInvoiceEntities,
  selectInvoiceSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IInvoice | null;
  }
);

export const selectActionStatus = createSelector(
  selectInvoice,
  (state: IInvoiceState) => state.actionStatus
);

export const selectError = createSelector(
  selectInvoice,
  (state: IInvoiceState) => state.error
);
