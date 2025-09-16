import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceCustomerCustomerList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { ICustomer } from '@console-core/types';

export const customerReadRequest = createAction(
  '[CUSTOMER] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const customerReadRequestSuccess = createAction(
  '[CUSTOMER] Read success',
  props<{ payload: ICustomer[] }>()
);

export const customerReadRequestFail = createAction(
  '[CUSTOMER] Read fail',
  props<{ error: string }>()
);

export const customerReadOneByIdRequest = createAction(
  '[CUSTOMER] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const customerReadOneByIdRequestSuccess = createAction(
  '[CUSTOMER] Read one by id success',
  props<{ payload: ICustomer }>()
);

export const customerReadOneByIdRequestFail = createAction(
  '[CUSTOMER] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[CUSTOMER] Set selected id',
  props<{ payload: string | null }>()
);

export const customerCreateRequest = createAction(
  '[CUSTOMER] customer create request',
  props<{ payload: IIoRestorecommerceCustomerCustomerList }>()
);

export const customerCreateSuccess = createAction(
  '[CUSTOMER] Customer create success',
  props<{ payload: ICustomer }>()
);

export const customerCreateFail = createAction(
  '[CUSTOMER] Customer create fail',
  props<{ error: string }>()
);

export const customerUpdateRequest = createAction(
  '[CUSTOMER] Customer update request',
  props<{ payload: IIoRestorecommerceCustomerCustomerList }>()
);

export const customerUpdateSuccess = createAction(
  '[CUSTOMER] Customer update success',
  props<{ payload: ICustomer }>()
);

export const customerUpdateFail = createAction(
  '[CUSTOMER] Customer update fail',
  props<{ error: string }>()
);

export const customerRemoveRequest = createAction(
  '[CUSTOMER] Customer remove request',
  props<{ payload: { id: string } }>()
);

export const customerRemoveSuccess = createAction(
  '[CUSTOMER] Customer remove success',
  props<{ payload: { id: string } }>()
);

export const customerRemoveFail = createAction(
  '[CUSTOMER] Customer remove fail',
  props<{ error: string }>()
);
