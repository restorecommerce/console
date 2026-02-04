import { createReducer, on } from '@ngrx/store';

import * as FulfillmentListActions from './fulfillment-list.actions';
import {
  initialFulfillmentListState,
  FulfillmentListState,
} from './fulfillment-list.state';

export const fulfillmentListFeatureKey = 'fulfillmentList';

export const fulfillmentListReducer = createReducer(
  initialFulfillmentListState,

  on(
    FulfillmentListActions.loadFulfillmentList,
    (state): FulfillmentListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    FulfillmentListActions.loadFulfillmentListSuccess,
    (state, { items }): FulfillmentListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    FulfillmentListActions.loadFulfillmentListFailure,
    (state, { error }): FulfillmentListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
