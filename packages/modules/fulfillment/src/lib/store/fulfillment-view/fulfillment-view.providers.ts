import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadFulfillmentViewEffect } from './fulfillment-view.effects';
import {
  fulfillmentViewFeatureKey,
  fulfillmentViewReducer,
} from './fulfillment-view.reducer';

export const provideFulfillmentViewStore = () => [
  provideState(fulfillmentViewFeatureKey, fulfillmentViewReducer),
  provideEffects({
    loadFulfillmentViewEffect,
  }),
];
