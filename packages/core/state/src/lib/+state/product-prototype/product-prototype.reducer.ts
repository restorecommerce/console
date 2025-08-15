import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IProductPrototype,
  IProductPrototypeState,
} from '@console-core/types';

import * as productPrototypeActions from './product-prototype.actions';

export const adapter: EntityAdapter<IProductPrototype> =
  createEntityAdapter<IProductPrototype>();

export const initialState: IProductPrototypeState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IProductPrototypeState>(
  initialState,
  on(
    productPrototypeActions.productPrototypeReadRequest,
    (state): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    productPrototypeActions.productPrototypeReadRequestSuccess,
    (state, { payload }): IProductPrototypeState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productPrototypeActions.productPrototypeReadRequestFail,
    (state, { error }): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),

  on(
    productPrototypeActions.productPrototypeReadOneByIdRequest,
    (state): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    productPrototypeActions.productPrototypeReadOneByIdRequestSuccess,
    (state, { payload }): IProductPrototypeState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    productPrototypeActions.productPrototypeReadOneByIdRequestFail,
    (state, { error }): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productPrototypeActions.setSelectedId,
    (state, { payload }): IProductPrototypeState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    productPrototypeActions.productPrototypeCreateRequest,
    (state): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productPrototypeActions.productPrototypeCreateSuccess,
    (state, { payload }): IProductPrototypeState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productPrototypeActions.productPrototypeCreateFail,
    (state, { error }): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productPrototypeActions.productPrototypeUpdateRequest,
    (state): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productPrototypeActions.productPrototypeUpdateSuccess,
    (state, { payload }): IProductPrototypeState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    productPrototypeActions.productPrototypeUpdateFail,
    (state, { error }): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    productPrototypeActions.productPrototypeRemoveRequest,
    (state): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    productPrototypeActions.productPrototypeRemoveSuccess,
    (state, { payload }): IProductPrototypeState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    productPrototypeActions.productPrototypeRemoveFail,
    (state, { error }): IProductPrototypeState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const productPrototypeReducer = (
  state: IProductPrototypeState | undefined,
  action: Action
) => reducer(state, action);
