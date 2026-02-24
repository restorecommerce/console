import { createAction, props } from '@ngrx/store';

import { CreateUserCommand } from '../../commands';

export const createUser = createAction(
  '[IAM User Create] Create User',
  props<{ command: CreateUserCommand }>()
);

export const createUserSuccess = createAction(
  '[IAM User Create] Create User Success',
  props<{ id: string }>()
);

export const createUserFailure = createAction(
  '[IAM User Create] Create User Failure',
  props<{ error: string }>()
);

export const resetCreateUserState = createAction('[IAM User Create] Reset');
