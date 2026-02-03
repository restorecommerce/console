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
  on(OrderViewActions.leavePage, (): OrderViewState => initialOrderViewState),
  // Fulfilments
  on(
    OrderViewActions.loadFulfilments,
    (state): OrderViewState => ({
      ...state,
      fulfilments: { ...state.fulfilments, loading: true },
    })
  ),

  on(
    OrderViewActions.loadFulfilmentsSuccess,
    (state, { fulfilments }): OrderViewState => ({
      ...state,
      fulfilments: { loading: false, items: fulfilments },
    })
  ),

  on(
    OrderViewActions.loadFulfilmentsFailure,
    (state, { error }): OrderViewState => ({
      ...state,
      fulfilments: { loading: false, items: [], error },
    })
  ),

  // Invoices
  on(
    OrderViewActions.loadInvoices,
    (state): OrderViewState => ({
      ...state,
      invoices: { ...state.invoices, loading: true },
    })
  ),

  on(
    OrderViewActions.loadInvoicesSuccess,
    (state, { invoices }): OrderViewState => ({
      ...state,
      invoices: { loading: false, items: invoices },
    })
  ),

  on(
    OrderViewActions.loadInvoicesFailure,
    (state, { error }): OrderViewState => ({
      ...state,
      invoices: { loading: false, items: [], error },
    })
  )
);
