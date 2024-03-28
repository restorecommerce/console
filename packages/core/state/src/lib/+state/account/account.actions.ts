import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceUserChangeEmailRequest,
  IIoRestorecommerceUserChangePasswordRequest,
  IIoRestorecommerceUserConfirmEmailChangeRequest,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserFindRequest,
  IIoRestorecommerceUserUserList,
} from '@console-core/graphql';
import { IUser } from '@console-core/types';

export const userFindRequest = createAction(
  '[ACCOUNT] User find request',
  props<{ payload: IIoRestorecommerceUserFindRequest }>()
);

export const userFindSuccess = createAction(
  '[ACCOUNT] User find success',
  props<{ payload: IUser }>()
);

export const userFindFail = createAction(
  '[ACCOUNT] User find fail',
  props<{ error: string }>()
);

export const userFindByTokenRequest = createAction(
  '[ACCOUNT] Find user by token request',
  props<{ payload: IIoRestorecommerceUserFindByTokenRequest }>()
);

export const userFindByTokenSuccess = createAction(
  '[ACCOUNT] Find user by token success',
  props<{ payload: IUser }>()
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
  props<{ payload: IUser }>()
);

export const userMutateFail = createAction(
  '[ACCOUNT] User mutate fail',
  props<{ error: string }>()
);

export const userChangeEmailRequest = createAction(
  '[ACCOUNT] User change email request',
  props<{ payload: IIoRestorecommerceUserChangeEmailRequest }>()
);

export const userChangeEmailSuccess = createAction(
  '[ACCOUNT] User change email success'
);

export const userChangeEmailFail = createAction(
  '[ACCOUNT] User change email fail',
  props<{ error: string }>()
);

export const userConfirmEmailChangeRequest = createAction(
  '[ACCOUNT] User confirm email change request',
  props<{ payload: IIoRestorecommerceUserConfirmEmailChangeRequest }>()
);

export const userConfirmEmailChangeSuccess = createAction(
  '[ACCOUNT] User confirm email change success'
);

export const userConfirmEmailChangeFail = createAction(
  '[ACCOUNT] User confirm email change fail',
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
