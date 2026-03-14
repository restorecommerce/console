import { createAction, props } from '@ngrx/store';

import { UpdateUserCommand } from '../../commands';
import { UserFormValue } from '../../models';

export const loadUser = createAction(
  '[IAM User Edit] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[IAM User Edit] Load User Success',
  props<{ user: UserFormValue }>()
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
  props<{ user: UserFormValue }>()
);

export const updateUserFailure = createAction(
  '[IAM User Edit] Update User Failure',
  props<{ error: string }>()
);
