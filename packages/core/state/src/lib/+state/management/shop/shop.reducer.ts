import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IShop, IShopState } from '@console-core/types';

import * as shopActions from './shop.actions';

export const adapter: EntityAdapter<IShop> = createEntityAdapter<IShop>();

export const initialState: IShopState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IShopState>(
  initialState,
  on(
    shopActions.shopReadRequest,
    (state): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    shopActions.shopReadRequestSuccess,
    (state, { payload }): IShopState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    shopActions.shopReadRequestFail,
    (state, { error }): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    shopActions.shopReadOneByIdRequest,
    (state): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    shopActions.shopReadOneByIdRequestSuccess,
    (state, { payload }): IShopState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    shopActions.shopReadOneByIdRequestFail,
    (state, { error }): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    shopActions.setSelectedId,
    (state, { payload }): IShopState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    shopActions.shopCreateRequest,
    (state): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    shopActions.shopCreateSuccess,
    (state, { payload }): IShopState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    shopActions.shopCreateFail,
    (state, { error }): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    shopActions.shopUpdateRequest,
    (state): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    shopActions.shopUpdateSuccess,
    (state, { payload }): IShopState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    shopActions.shopUpdateFail,
    (state, { error }): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    shopActions.shopRemoveRequest,
    (state): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    shopActions.shopRemoveSuccess,
    (state, { payload }): IShopState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    shopActions.shopRemoveFail,
    (state, { error }): IShopState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const shopReducer = (state: IShopState | undefined, action: Action) =>
  reducer(state, action);
