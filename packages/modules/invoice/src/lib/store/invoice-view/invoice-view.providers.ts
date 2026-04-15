import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadInvoiceViewEffect } from './invoice-view.effects';
import {
  invoiceViewFeatureKey,
  invoiceViewReducer,
} from './invoice-view.reducer';

export const provideInvoiceViewStore = () => [
  provideState(invoiceViewFeatureKey, invoiceViewReducer),
  provideEffects({
    loadInvoiceViewEffect,
  }),
];
