import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceUserFindByTokenRequest,
  IIoRestorecommerceUserUserList,
} from '@console-core/graphql';
import { IUser } from '@console-core/types';

export const userFindByTokenRequest = createAction(
  '[ACCOUNT] Find user by token request',
  props<{ payload: IIoRestorecommerceUserFindByTokenRequest }>()
);

export const userFindByTokenSuccess = createAction(
  '[ACCOUNT] Find user by token request success',
  props<{ payload: IUser | null }>()
);

export const userFindByTokenFail = createAction(
  '[ACCOUNT] Find user by token request fail',
  props<{ error: string }>()
);

export const userMutateRequest = createAction(
  '[ACCOUNT] User mutate request',
  props<{ payload: IIoRestorecommerceUserUserList }>()
);

export const userMutateSuccess = createAction(
  '[ACCOUNT] User mutate request success',
  props<{ payload: IUser | null }>()
);

export const userMutateFail = createAction(
  '[ACCOUNT] User mutate request fail',
  props<{ error: string }>()
);

export const userDeleteRequest = createAction(
  '[ACCOUNT] User delete request',
  props<{ payload: IIoRestorecommerceResourcebaseDeleteRequest }>()
);

export const userDeleteSuccess = createAction(
  '[ACCOUNT] User delete request success'
);

export const userDeleteFail = createAction(
  '[ACCOUNT] User delete request fail',
  props<{ error: string }>()
);

export const resetAccountState = createAction('[ACCOUNT] Reset account state');
