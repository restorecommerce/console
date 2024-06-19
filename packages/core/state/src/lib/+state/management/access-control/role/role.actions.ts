import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceRoleRoleList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IRole } from '@console-core/types';

export const roleReadRequest = createAction(
  '[ROLE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const roleReadRequestSuccess = createAction(
  '[ROLE] Read success',
  props<{ payload: IRole[] }>()
);

export const roleReadRequestFail = createAction(
  '[ROLE] Read fail',
  props<{ error: string }>()
);

export const roleReadOneByIdRequest = createAction(
  '[ROLE] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const roleReadOneByIdRequestSuccess = createAction(
  '[ROLE] Read one by id success',
  props<{ payload: IRole }>()
);

export const roleReadOneByIdRequestFail = createAction(
  '[ROLE] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[ROLE] Set selected id',
  props<{ payload: string | null }>()
);

export const roleCreateRequest = createAction(
  '[ROLE] Role create request',
  props<{ payload: IIoRestorecommerceRoleRoleList }>()
);

export const roleCreateSuccess = createAction(
  '[ROLE] Role create success',
  props<{ payload: IRole }>()
);

export const roleCreateFail = createAction(
  '[ROLE] Role create fail',
  props<{ error: string }>()
);

export const roleUpdateRequest = createAction(
  '[ROLE] Role update request',
  props<{ payload: IIoRestorecommerceRoleRoleList }>()
);

export const roleUpdateSuccess = createAction(
  '[ROLE] Role update success',
  props<{ payload: IRole }>()
);

export const roleUpdateFail = createAction(
  '[ROLE] Role update fail',
  props<{ error: string }>()
);

export const roleRemoveRequest = createAction(
  '[ROLE] Role remove request',
  props<{ payload: { id: string } }>()
);

export const roleRemoveSuccess = createAction(
  '[ROLE] Role remove success',
  props<{ payload: { id: string } }>()
);

export const roleRemoveFail = createAction(
  '[ROLE] Role remove fail',
  props<{ error: string }>()
);
