import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceInvoiceInvoiceList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IInvoice } from '@console-core/types';

export const invoiceReadRequest = createAction(
  '[INVOICE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const invoiceReadRequestSuccess = createAction(
  '[INVOICE] Read success',
  props<{ payload: IInvoice[] }>()
);

export const invoiceReadRequestFail = createAction(
  '[INVOICE] Read fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[INVOICE] Set selected id',
  props<{ payload: string | null }>()
);

export const invoiceCreateRequest = createAction(
  '[INVOICE] Invoice create request',
  props<{ payload: IIoRestorecommerceInvoiceInvoiceList }>()
);

export const invoiceCreateSuccess = createAction(
  '[INVOICE] Invoice create success',
  props<{ payload: IInvoice }>()
);

export const invoiceCreateFail = createAction(
  '[INVOICE] Invoice create fail',
  props<{ error: string }>()
);

export const invoiceUpdateRequest = createAction(
  '[INVOICE] Invoice update request',
  props<{ payload: IIoRestorecommerceInvoiceInvoiceList }>()
);

export const invoiceUpdateSuccess = createAction(
  '[INVOICE] Invoice update success',
  props<{ payload: IInvoice }>()
);

export const invoiceUpdateFail = createAction(
  '[INVOICE] Invoice update fail',
  props<{ error: string }>()
);

export const invoiceRemoveRequest = createAction(
  '[INVOICE] Invoice remove request',
  props<{ payload: { id: string } }>()
);

export const invoiceRemoveSuccess = createAction(
  '[INVOICE] Invoice remove success',
  props<{ payload: { id: string } }>()
);

export const invoiceRemoveFail = createAction(
  '[INVOICE] Invoice remove fail',
  props<{ error: string }>()
);

export const invoiceChangeStateRequest = createAction(
  '[INVOICE] Invoice change payment state request',
  props<{ payload: IIoRestorecommerceInvoiceInvoiceList }>()
);

export const invoiceChangeStateSuccess = createAction(
  '[INVOICE] Invoice change payment state success',
  props<{ payload: IInvoice }>()
);

export const invoiceChangeStateFail = createAction(
  '[INVOICE] Invoice change payment state fail',
  props<{ error: string }>()
);
