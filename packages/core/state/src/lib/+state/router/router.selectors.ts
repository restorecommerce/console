import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IRouterState } from '@console-core/types';

export const selectRouter = createFeatureSelector<
  RouterReducerState<IRouterState>
>(STORE.states.routerState);

export const selectData = createSelector(
  selectRouter,
  (router: RouterReducerState<IRouterState>) => router.state.data
);

export const selectParams = createSelector(
  selectRouter,
  (router: RouterReducerState<IRouterState>) => router.state.params
);

export const selectQueryParams = createSelector(
  selectRouter,
  (router: RouterReducerState<IRouterState>) => router.state.queryParams
);

export const selectUrl = createSelector(
  selectRouter,
  (router: RouterReducerState<IRouterState>) => router.state.url
);
