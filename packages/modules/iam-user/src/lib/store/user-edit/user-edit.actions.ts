import { createAction, props } from '@ngrx/store';

import { UpdateUserCommand } from '../../commands';
import { UserUpdateFormValue } from '../../models';

export const loadUser = createAction(
  '[IAM User Edit] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[IAM User Edit] Load User Success',
  props<{ user: UserUpdateFormValue }>()
);

export const loadUserFailure = createAction(
  '[IAM User Edit] Load User Failure',
  props<{ error: string }>()
);

export const updateUser = createAction(
  '[IAM User Edit] Update User',
  props<{ command: UpdateUserCommand }>()
);

export const updateUserSuccess = createAction(
  '[IAM User Edit] Update User Success',
  props<{ id: string }>()
);

export const updateUserFailure = createAction(
  '[IAM User Edit] Update User Failure',
  props<{ error: string }>()
);

export const resetUpdateUserState = createAction('[IAM User Edit] Reset');
