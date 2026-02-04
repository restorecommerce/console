import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadFulfillmentListEffect } from './fulfillment-list.effects';
import {
  fulfillmentListFeatureKey,
  fulfillmentListReducer,
} from './fulfillment-list.reducer';

export const provideFulfillmentListStore = () => [
  provideState(fulfillmentListFeatureKey, fulfillmentListReducer),
  provideEffects({
    loadFulfillmentListEffect,
  }),
];
