import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import {
  loadOrderListEffect,
  loadOrderListOnNavigationEffect,
} from './order-list.effects';
import { orderListFeatureKey, orderListReducer } from './order-list.reducer';

export const provideOrderListStore = () => [
  provideState(orderListFeatureKey, orderListReducer),
  provideEffects({
    loadOrderListEffect,
    loadOrderListOnNavigationEffect,
  }),
];
