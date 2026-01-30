import { createReducer, on } from '@ngrx/store';

import * as OrderViewActions from './order-view.actions';
import { initialOrderViewState, OrderViewState } from './order-view.state';

export const orderViewFeatureKey = 'orderView';

export const orderViewReducer = createReducer(
  initialOrderViewState,
  on(
    OrderViewActions.enterPage,
    (state, { orderId }): OrderViewState => ({
      ...state,
      orderId,
      loading: true,
      error: null,
    })
  ),
  on(
    OrderViewActions.loadOrder,
    (state): OrderViewState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    OrderViewActions.loadOrderSuccess,
    (state, { order }): OrderViewState => ({
      ...state,
      order,
      loading: false,
    })
  ),
  on(
    OrderViewActions.loadOrderFailure,
    (state, { error }): OrderViewState => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    OrderViewActions.changeOrderTab,
    (state, { index }): OrderViewState => ({
      ...state,
      activeTab: index,
    })
  ),
  on(OrderViewActions.leavePage, (): OrderViewState => initialOrderViewState)
);
