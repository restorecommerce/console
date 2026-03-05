import { createAction, props } from '@ngrx/store';

import { RoleListItem } from '../../models';

export const loadRoleList = createAction('[Role List] Load');

export const loadRoleListSuccess = createAction(
  '[Role List] Load Success',
  props<{ items: RoleListItem[] }>()
);

export const loadRoleListFailure = createAction(
  '[Role List] Load Failure',
  props<{ error: string }>()
);
