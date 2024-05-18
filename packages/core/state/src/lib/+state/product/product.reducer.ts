import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IProduct, IProductState } from '@console-core/types';

import * as productActions from './product.actions';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: IProductState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IProductState>(
  initialState,
  on(
    productActions.productReadRequest,
    (state): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    productActions.productReadRequestSuccess,
    (state, { payload }): IProductState => {
      const data = {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      };
      return payload.isLoadMore
        ? adapter.addMany(payload.items, data)
        : adapter.setAll(payload.items, data);
    }
  ),
  on(
    productActions.productReadRequestFail,
    (state, { error }): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productActions.setSelectedId,
    (state, { payload }): IProductState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    productActions.productCreateRequest,
    (state): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productActions.productCreateSuccess,
    (state, { payload }): IProductState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productActions.productCreateFail,
    (state, { error }): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productActions.productUpdateRequest,
    (state): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productActions.productUpdateSuccess,
    (state, { payload }): IProductState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    productActions.productUpdateFail,
    (state, { error }): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productActions.productRemoveRequest,
    (state): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productActions.productRemoveSuccess,
    (state, { payload }): IProductState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productActions.productRemoveFail,
    (state, { error }): IProductState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const productReducer = (
  state: IProductState | undefined,
  action: Action
) => reducer(state, action);
