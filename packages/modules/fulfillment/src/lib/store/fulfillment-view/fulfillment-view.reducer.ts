import { createReducer, on } from '@ngrx/store';

import * as FulfillmentViewActions from './fulfillment-view.actions';
import {
  FulfillmentViewState,
  initialFulfillmentViewState,
} from './fulfillment-view.state';

export const fulfillmentViewFeatureKey = 'fulfillmentView';

export const fulfillmentViewReducer = createReducer(
  initialFulfillmentViewState,
  on(
    FulfillmentViewActions.enterPage,
    (state, { fulfillmentId }): FulfillmentViewState => ({
      ...state,
      fulfillmentId,
      loading: true,
      error: null,
    })
  ),
  on(
    FulfillmentViewActions.loadFulfillment,
    (state): FulfillmentViewState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    FulfillmentViewActions.loadFulfillmentSuccess,
    (state, { fulfillment }): FulfillmentViewState => ({
      ...state,
      fulfillment,
      loading: false,
    })
  ),
  on(
    FulfillmentViewActions.loadFulfillmentFailure,
    (state, { error }): FulfillmentViewState => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    FulfillmentViewActions.leavePage,
    (): FulfillmentViewState => initialFulfillmentViewState
  )
);
