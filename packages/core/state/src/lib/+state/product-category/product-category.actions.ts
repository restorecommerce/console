import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceProductCategoryProductCategoryList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IProductCategory } from '@console-core/types';

export const productCategoryReadRequest = createAction(
  '[PRODUCT CATEGORY] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const productCategoryReadRequestSuccess = createAction(
  '[PRODUCT CATEGORY] Read success',
  props<{
    payload: IProductCategory[];
  }>()
);

export const productCategoryReadRequestFail = createAction(
  '[PRODUCT CATEGORY] Read fail',
  props<{ error: string }>()
);

export const productCategoryReadOneByIdRequest = createAction(
  '[PRODUCT CATEGORY] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const productCategoryReadOneByIdRequestSuccess = createAction(
  '[PRODUCT CATEGORY] Read one by id success',
  props<{ payload: IProductCategory }>()
);

export const productCategoryReadOneByIdRequestFail = createAction(
  '[PRODUCT CATEGORY] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[PRODUCT CATEGORY] Set selected id',
  props<{ payload: string | null }>()
);

export const productCategoryCreateRequest = createAction(
  '[PRODUCT CATEGORY] ProductCategory create request',
  props<{ payload: IIoRestorecommerceProductCategoryProductCategoryList }>()
);

export const productCategoryCreateSuccess = createAction(
  '[PRODUCT CATEGORY] ProductCategory create success',
  props<{ payload: IProductCategory }>()
);

export const productCategoryCreateFail = createAction(
  '[PRODUCT CATEGORY] ProductCategory create fail',
  props<{ error: string }>()
);

export const productCategoryUpdateRequest = createAction(
  '[PRODUCT CATEGORY] ProductCategory update request',
  props<{ payload: IIoRestorecommerceProductCategoryProductCategoryList }>()
);

export const productCategoryUpdateSuccess = createAction(
  '[PRODUCT CATEGORY] ProductCategory update success',
  props<{ payload: IProductCategory }>()
);

export const productCategoryUpdateFail = createAction(
  '[PRODUCT CATEGORY] ProductCategory update fail',
  props<{ error: string }>()
);

export const productCategoryRemoveRequest = createAction(
  '[PRODUCT CATEGORY] ProductCategory remove request',
  props<{ payload: { id: string } }>()
);

export const productCategoryRemoveSuccess = createAction(
  '[PRODUCT CATEGORY] ProductCategory remove success',
  props<{ payload: { id: string } }>()
);

export const productCategoryRemoveFail = createAction(
  '[PRODUCT CATEGORY] ProductCategory remove fail',
  props<{ error: string }>()
);
