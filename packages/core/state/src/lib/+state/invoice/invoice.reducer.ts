import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IInvoice, IInvoiceState } from '@console-core/types';

import * as invoiceActions from './invoice.actions';

export const adapter: EntityAdapter<IInvoice> = createEntityAdapter<IInvoice>();

export const initialState: IInvoiceState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IInvoiceState>(
  initialState,
  on(
    invoiceActions.invoiceReadRequest,
    (state): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    invoiceActions.invoiceReadRequestSuccess,
    (state, { payload }): IInvoiceState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    invoiceActions.invoiceReadRequestFail,
    (state, { error }): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    invoiceActions.setSelectedId,
    (state, { payload }): IInvoiceState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    invoiceActions.invoiceCreateRequest,
    (state): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    invoiceActions.invoiceCreateSuccess,
    (state, { payload }): IInvoiceState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    invoiceActions.invoiceCreateFail,
    (state, { error }): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    invoiceActions.invoiceUpdateRequest,
    (state): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    invoiceActions.invoiceUpdateSuccess,
    (state, { payload }): IInvoiceState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    invoiceActions.invoiceUpdateFail,
    (state, { error }): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    invoiceActions.invoiceRemoveRequest,
    (state): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    invoiceActions.invoiceRemoveSuccess,
    (state, { payload }): IInvoiceState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    invoiceActions.invoiceRemoveFail,
    (state, { error }): IInvoiceState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const invoiceReducer = (
  state: IInvoiceState | undefined,
  action: Action
) => reducer(state, action);
