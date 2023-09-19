import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserUser,
  IIoRestorecommerceUserUserList,
} from '@console-core/graphql';

export const userFindByTokenRequest = createAction(
  '[ACCOUNT] Find user by token request',
  props<{ payload: IIoRestorecommerceUserFindByTokenRequest }>()
);

export const userFindByTokenSuccess = createAction(
  '[ACCOUNT] Find user by token success',
  props<{ payload: IIoRestorecommerceUserUser }>()
);

export const userFindByTokenFail = createAction(
  '[ACCOUNT] Find user by token fail',
  props<{ error: string }>()
);

export const userMutateRequest = createAction(
  '[ACCOUNT] User mutate request',
  props<{ payload: IIoRestorecommerceUserUserList }>()
);

export const userMutateSuccess = createAction(
  '[ACCOUNT] User mutate success',
  props<{ payload: IIoRestorecommerceUserUser }>()
);

export const userMutateFail = createAction(
  '[ACCOUNT] User mutate fail',
  props<{ error: string }>()
);

export const userChangePasswordRequest = createAction(
  '[ACCOUNT] User change password request',
  props<{ payload: IIoRestorecommerceUserChangePasswordRequest }>()
);

export const userChangePasswordSuccess = createAction(
  '[ACCOUNT] User change password success'
);

export const userChangePasswordFail = createAction(
  '[ACCOUNT] User change password fail',
  props<{ error: string }>()
);

export const userDeleteRequest = createAction(
  '[ACCOUNT] User delete request',
  props<{ payload: IIoRestorecommerceResourcebaseDeleteRequest }>()
);

export const userDeleteSuccess = createAction('[ACCOUNT] User delete success');

export const userDeleteFail = createAction(
  '[ACCOUNT] User delete fail',
  props<{ error: string }>()
);

export const resetAccountState = createAction('[ACCOUNT] Reset account state');
