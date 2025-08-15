import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IProductCategory,
  IProductCategoryState,
} from '@console-core/types';

import * as productCategoryActions from './product-category.actions';

export const adapter: EntityAdapter<IProductCategory> =
  createEntityAdapter<IProductCategory>();

export const initialState: IProductCategoryState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IProductCategoryState>(
  initialState,
  on(
    productCategoryActions.productCategoryReadRequest,
    (state): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    productCategoryActions.productCategoryReadRequestSuccess,
    (state, { payload }): IProductCategoryState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productCategoryActions.productCategoryReadRequestFail,
    (state, { error }): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),

  on(
    productCategoryActions.productCategoryReadOneByIdRequest,
    (state): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    productCategoryActions.productCategoryReadOneByIdRequestSuccess,
    (state, { payload }): IProductCategoryState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    productCategoryActions.productCategoryReadOneByIdRequestFail,
    (state, { error }): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productCategoryActions.setSelectedId,
    (state, { payload }): IProductCategoryState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    productCategoryActions.productCategoryCreateRequest,
    (state): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productCategoryActions.productCategoryCreateSuccess,
    (state, { payload }): IProductCategoryState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productCategoryActions.productCategoryCreateFail,
    (state, { error }): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productCategoryActions.productCategoryUpdateRequest,
    (state): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productCategoryActions.productCategoryUpdateSuccess,
    (state, { payload }): IProductCategoryState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    productCategoryActions.productCategoryUpdateFail,
    (state, { error }): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productCategoryActions.productCategoryRemoveRequest,
    (state): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productCategoryActions.productCategoryRemoveSuccess,
    (state, { payload }): IProductCategoryState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productCategoryActions.productCategoryRemoveFail,
    (state, { error }): IProductCategoryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const productCategoryReducer = (
  state: IProductCategoryState | undefined,
  action: Action
) => reducer(state, action);
