import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceUserUserList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IRoleAssociation, IUser } from '@console-core/types';

export const userReadRequest = createAction(
  '[IAM] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const userReadRequestSuccess = createAction(
  '[IAM] Read success',
  props<{ payload: IUser[] }>()
);

export const userReadRequestFail = createAction(
  '[IAM] Read fail',
  props<{ error: string }>()
);

export const userReadOneByIdRequest = createAction(
  '[IAM] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const userReadOneByIdRequestSuccess = createAction(
  '[IAM] Read one by id success',
  props<{ payload: IUser }>()
);

export const userReadOneByIdRequestFail = createAction(
  '[IAM] Read one by id fail',
  props<{ error: string }>()
);

export const userSetSelectedId = createAction(
  '[IAM] User set selected id',
  props<{ payload: string | null }>()
);

export const userCreateRequest = createAction(
  '[IAM] User create request',
  props<{ payload: IIoRestorecommerceUserUserList }>()
);

export const userCreateSuccess = createAction(
  '[IAM] User create success',
  props<{ payload: IUser }>()
);

export const userCreateFail = createAction(
  '[IAM] User create fail',
  props<{ error: string }>()
);

export const userUpdateRequest = createAction(
  '[IAM] User update request',
  props<{ payload: IIoRestorecommerceUserUserList }>()
);

export const userUpdateSuccess = createAction(
  '[IAM] User update success',
  props<{ payload: IUser }>()
);

export const userUpdateFail = createAction(
  '[IAM] User update fail',
  props<{ error: string }>()
);

export const userSetTempRoleAssociations = createAction(
  '[IAM] Set temp role associations',
  props<{ payload: IRoleAssociation[] }>()
);

export const userChangePasswordRequest = createAction(
  '[IAM] User change password request',
  props<{ payload: IIoRestorecommerceUserUserList }>()
);

export const userChangePasswordSuccess = createAction(
  '[IAM] User change password success'
);

export const userChangePasswordFail = createAction(
  '[IAM] User change password fail',
  props<{ error: string }>()
);

export const userRemoveRequest = createAction(
  '[IAM] User remove request',
  props<{ payload: { id: string } }>()
);

export const userRemoveSuccess = createAction(
  '[IAM] User remove success',
  props<{ payload: { id: string } }>()
);

export const userRemoveFail = createAction(
  '[IAM] User remove fail',
  props<{ error: string }>()
);
