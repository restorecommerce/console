import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadOrderViewEffect } from './order-view.effects';
import { orderViewFeatureKey, orderViewReducer } from './order-view.reducer';

export const provideOrderViewStore = () => [
  provideState(orderViewFeatureKey, orderViewReducer),
  provideEffects({
    loadOrderViewEffect,
  }),
];
