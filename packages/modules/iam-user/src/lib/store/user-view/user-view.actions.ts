import { createAction, props } from '@ngrx/store';

import { UserDetail } from '../../models';

export const enterPage = createAction(
  '[IAMUser View] Enter Page',
  props<{ iamUserId: string }>()
);

export const leavePage = createAction('[IAMUser View] Leave Page');

export const loadIAMUser = createAction(
  '[IAMUser View] Load IAMUser',
  props<{ iamUserId: string }>()
);

export const loadIAMUserSuccess = createAction(
  '[IAMUser View] Load IAMUser Success',
  props<{ iamUser: UserDetail }>()
);

export const loadIAMUserFailure = createAction(
  '[IAMUser View] Load IAMUser Failure',
  props<{ error: string }>()
);
