import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadInvoiceListEffect } from './invoice-list.effects';
import {
  invoiceListFeatureKey,
  invoiceListReducer,
} from './invoice-list.reducer';

export const provideInvoiceListStore = () => [
  provideState(invoiceListFeatureKey, invoiceListReducer),
  provideEffects({
    loadInvoiceListEffect,
  }),
];
