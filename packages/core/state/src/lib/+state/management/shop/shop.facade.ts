import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceShopShopList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as shopActions from './shop.actions';
import * as shopSelectors from './shop.selectors';

@Injectable()
export class ShopFacade {
  // Selectors
  readonly ids$ = this.store.select(shopSelectors.selectShopIds);
  readonly entities$ = this.store.select(shopSelectors.selectShopEntities);
  readonly all$ = this.store.select(shopSelectors.selectShopAll);
  readonly total$ = this.store.select(shopSelectors.selectShopTotal);
  readonly selectedId$ = this.store.select(shopSelectors.selectShopSelectedId);
  readonly selected$ = this.store.select(shopSelectors.selectShopSelected);
  readonly actionStatus$ = this.store.select(shopSelectors.selectActionStatus);
  readonly error$ = this.store.select(shopSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(shopActions.shopReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(shopActions.shopReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(shopActions.setSelectedId({ payload }));
  create = (payload: IIoRestorecommerceShopShopList) =>
    this.store.dispatch(shopActions.shopCreateRequest({ payload }));
  update = (payload: IIoRestorecommerceShopShopList) =>
    this.store.dispatch(shopActions.shopUpdateRequest({ payload }));
  remove = (payload: { id: string }) =>
    this.store.dispatch(shopActions.shopRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
