import { createAction, props } from '@ngrx/store';

import { UserListItem } from '../../models';

export const loadUserList = createAction('[User List] Load');

export const loadUserListSuccess = createAction(
  '[User List] Load Success',
  props<{ items: UserListItem[] }>()
);

export const loadUserListFailure = createAction(
  '[User List] Load Failure',
  props<{ error: string }>()
);
