import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceProductPrototypeProductPrototypeList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IProductPrototype } from '@console-core/types';

export const productPrototypeReadRequest = createAction(
  '[PRODUCT PROTOTYPE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const productPrototypeReadRequestSuccess = createAction(
  '[PRODUCT PROTOTYPE] Read success',
  props<{
    payload: IProductPrototype[];
  }>()
);

export const productPrototypeReadRequestFail = createAction(
  '[PRODUCT PROTOTYPE] Read fail',
  props<{ error: string }>()
);

export const productPrototypeReadOneByIdRequest = createAction(
  '[PRODUCT PROTOTYPE] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const productPrototypeReadOneByIdRequestSuccess = createAction(
  '[PRODUCT PROTOTYPE] Read one by id success',
  props<{ payload: IProductPrototype }>()
);

export const productPrototypeReadOneByIdRequestFail = createAction(
  '[PRODUCT PROTOTYPE] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[PRODUCT PROTOTYPE] Set selected id',
  props<{ payload: string | null }>()
);

export const productPrototypeCreateRequest = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype create request',
  props<{ payload: IIoRestorecommerceProductPrototypeProductPrototypeList }>()
);

export const productPrototypeCreateSuccess = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype create success',
  props<{ payload: IProductPrototype }>()
);

export const productPrototypeCreateFail = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype create fail',
  props<{ error: string }>()
);

export const productPrototypeUpdateRequest = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype update request',
  props<{ payload: IIoRestorecommerceProductPrototypeProductPrototypeList }>()
);

export const productPrototypeUpdateSuccess = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype update success',
  props<{ payload: IProductPrototype }>()
);

export const productPrototypeUpdateFail = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype update fail',
  props<{ error: string }>()
);

export const productPrototypeRemoveRequest = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype remove request',
  props<{ payload: { id: string } }>()
);

export const productPrototypeRemoveSuccess = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype remove success',
  props<{ payload: { id: string } }>()
);

export const productPrototypeRemoveFail = createAction(
  '[PRODUCT PROTOTYPE] ProductPrototype remove fail',
  props<{ error: string }>()
);
