import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceProductProductList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as productActions from './product.actions';
import * as productSelectors from './product.selectors';

@Injectable()
export class ProductFacade {
  // Selectors
  readonly ids$ = this.store.select(productSelectors.selectProductIds);
  readonly entities$ = this.store.select(
    productSelectors.selectProductEntities
  );
  readonly all$ = this.store.select(productSelectors.selectProductAll);
  readonly total$ = this.store.select(productSelectors.selectProductTotal);
  readonly selectedId$ = this.store.select(
    productSelectors.selectProductSelectedId
  );
  readonly selected$ = this.store.select(
    productSelectors.selectProductSelected
  );
  readonly actionStatus$ = this.store.select(
    productSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(productSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(productActions.productReadRequest({ payload }));
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(productActions.productReadOneByIdRequest({ payload }));
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(productActions.setSelectedId({ payload }));

  create = (payload: IIoRestorecommerceProductProductList) => {
    this.store.dispatch(productActions.productCreateRequest({ payload }));
  };

  update = (payload: IIoRestorecommerceProductProductList) => {
    this.store.dispatch(productActions.productUpdateRequest({ payload }));
  };

  remove = (payload: { id: string }) =>
    this.store.dispatch(productActions.productRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
