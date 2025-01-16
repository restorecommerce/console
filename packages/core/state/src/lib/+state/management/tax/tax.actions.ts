import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceTaxTaxList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { ITax } from '@console-core/types';

export const taxReadRequest = createAction(
  '[TAX] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const taxReadRequestSuccess = createAction(
  '[TAX] Read success',
  props<{ payload: ITax[] }>()
);

export const taxReadRequestFail = createAction(
  '[TAX] Read fail',
  props<{ error: string }>()
);

export const taxReadOneByIdRequest = createAction(
  '[TAX] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const taxReadOneByIdRequestSuccess = createAction(
  '[TAX] Read one by id success',
  props<{ payload: ITax }>()
);

export const taxReadOneByIdRequestFail = createAction(
  '[TAX] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[TAX] Set selected id',
  props<{ payload: string | null }>()
);

export const taxCreateRequest = createAction(
  '[TAX] tax create request',
  props<{ payload: IIoRestorecommerceTaxTaxList }>()
);

export const taxCreateSuccess = createAction(
  '[TAX] tax create success',
  props<{ payload: ITax }>()
);

export const taxCreateFail = createAction(
  '[TAX] tax create fail',
  props<{ error: string }>()
);

export const taxUpdateRequest = createAction(
  '[TAX] tax update request',
  props<{ payload: IIoRestorecommerceTaxTaxList }>()
);

export const taxUpdateSuccess = createAction(
  '[TAX] tax update success',
  props<{ payload: ITax }>()
);

export const taxUpdateFail = createAction(
  '[TAX] tax update fail',
  props<{ error: string }>()
);

export const taxRemoveRequest = createAction(
  '[TAX] tax remove request',
  props<{ payload: { id: string } }>()
);

export const taxRemoveSuccess = createAction(
  '[TAX] tax remove success',
  props<{ payload: { id: string } }>()
);

export const taxRemoveFail = createAction(
  '[TAX] tax remove fail',
  props<{ error: string }>()
);
