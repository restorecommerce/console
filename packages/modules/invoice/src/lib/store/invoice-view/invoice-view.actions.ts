import { createAction, props } from '@ngrx/store';

import { InvoiceDetail } from '../../models';

export const enterPage = createAction(
  '[Invoice View] Enter Page',
  props<{ invoiceId: string }>()
);

export const leavePage = createAction('[Invoice View] Leave Page');

export const loadInvoice = createAction(
  '[Invoice View] Load Invoice',
  props<{ invoiceId: string }>()
);

export const loadInvoiceSuccess = createAction(
  '[Invoice View] Load Invoice Success',
  props<{ invoice: InvoiceDetail }>()
);

export const loadInvoiceFailure = createAction(
  '[Invoice View] Load Invoice Failure',
  props<{ error: string }>()
);
