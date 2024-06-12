import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceProductProductList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IProduct } from '@console-core/types';

export const productReadRequest = createAction(
  '[PRODUCT] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const productReadRequestSuccess = createAction(
  '[PRODUCT] Read success',
  props<{
    payload: {
      items: IProduct[];
      isLoadMore: boolean;
    };
  }>()
);

export const productReadRequestFail = createAction(
  '[PRODUCT] Read fail',
  props<{ error: string }>()
);

export const productReadOneByIdRequest = createAction(
  '[PRODUCT] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const productReadOneByIdRequestSuccess = createAction(
  '[PRODUCT] Read one by id success',
  props<{ payload: IProduct }>()
);

export const productReadOneByIdRequestFail = createAction(
  '[PRODUCT] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[PRODUCT] Set selected id',
  props<{ payload: string | null }>()
);

export const productCreateRequest = createAction(
  '[PRODUCT] Product create request',
  props<{ payload: IIoRestorecommerceProductProductList }>()
);

export const productCreateSuccess = createAction(
  '[PRODUCT] Product create success',
  props<{ payload: IProduct }>()
);

export const productCreateFail = createAction(
  '[PRODUCT] Product create fail',
  props<{ error: string }>()
);

export const productUpdateRequest = createAction(
  '[PRODUCT] Product update request',
  props<{ payload: IIoRestorecommerceProductProductList }>()
);

export const productUpdateSuccess = createAction(
  '[PRODUCT] Product update success',
  props<{ payload: IProduct }>()
);

export const productUpdateFail = createAction(
  '[PRODUCT] Product update fail',
  props<{ error: string }>()
);

export const productRemoveRequest = createAction(
  '[PRODUCT] Product remove request',
  props<{ payload: { id: string } }>()
);

export const productRemoveSuccess = createAction(
  '[PRODUCT] Product remove success',
  props<{ payload: { id: string } }>()
);

export const productRemoveFail = createAction(
  '[PRODUCT] Product remove fail',
  props<{ error: string }>()
);
