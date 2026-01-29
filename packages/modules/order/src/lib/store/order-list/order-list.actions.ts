import { createAction, props } from '@ngrx/store';

import { IOrderListItem } from '../../models';

export const loadOrderList = createAction('[Order List] Load');

export const loadOrderListSuccess = createAction(
  '[Order List] Load Success',
  props<{ items: IOrderListItem[] }>()
);

export const loadOrderListFailure = createAction(
  '[Order List] Load Failure',
  props<{ error: string }>()
);
