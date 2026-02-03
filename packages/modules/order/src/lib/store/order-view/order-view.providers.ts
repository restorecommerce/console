import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import {
  loadFulfilmentsEffect,
  loadInvoicesEffect,
  loadOrderViewEffect,
  orderDetailEnteredEffect,
} from './order-view.effects';
import { orderViewFeatureKey, orderViewReducer } from './order-view.reducer';

export const provideOrderViewStore = () => [
  provideState(orderViewFeatureKey, orderViewReducer),
  provideEffects({
    loadOrderViewEffect,
    loadInvoicesEffect,
    loadFulfilmentsEffect,
    orderDetailEnteredEffect,
  }),
];
