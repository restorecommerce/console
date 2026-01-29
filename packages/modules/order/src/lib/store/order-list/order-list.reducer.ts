import { createReducer, on } from '@ngrx/store';

import * as OrderListActions from './order-list.actions';
import { initialOrderListState, OrderListState } from './order-list.state';

export const orderListFeatureKey = 'orderList';

export const orderListReducer = createReducer(
  initialOrderListState,

  on(
    OrderListActions.loadOrderList,
    (state): OrderListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    OrderListActions.loadOrderListSuccess,
    (state, { items }): OrderListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    OrderListActions.loadOrderListFailure,
    (state, { error }): OrderListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
