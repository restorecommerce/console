import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceProductCategoryProductCategoryList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as productCategoryActions from './product-category.actions';
import * as productCategorySelectors from './product-category.selectors';

@Injectable()
export class ProductCategoryFacade {
  // Selectors
  readonly ids$ = this.store.select(
    productCategorySelectors.selectProductCategoryIds
  );
  readonly entities$ = this.store.select(
    productCategorySelectors.selectProductCategoryEntities
  );
  readonly all$ = this.store.select(
    productCategorySelectors.selectProductCategoryAll
  );
  readonly total$ = this.store.select(
    productCategorySelectors.selectProductCategoryTotal
  );
  readonly selectedId$ = this.store.select(
    productCategorySelectors.selectProductCategorySelectedId
  );
  readonly selected$ = this.store.select(
    productCategorySelectors.selectProductCategorySelected
  );
  readonly actionStatus$ = this.store.select(
    productCategorySelectors.selectActionStatus
  );
  readonly error$ = this.store.select(productCategorySelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      productCategoryActions.productCategoryReadRequest({ payload })
    );

  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      productCategoryActions.productCategoryReadOneByIdRequest({ payload })
    );

  setSelectedId = (payload: string | null) =>
    this.store.dispatch(productCategoryActions.setSelectedId({ payload }));

  create = (payload: IIoRestorecommerceProductCategoryProductCategoryList) =>
    this.store.dispatch(
      productCategoryActions.productCategoryCreateRequest({ payload })
    );
  update = (payload: IIoRestorecommerceProductCategoryProductCategoryList) =>
    this.store.dispatch(
      productCategoryActions.productCategoryUpdateRequest({ payload })
    );
  remove = (payload: { id: string }) =>
    this.store.dispatch(
      productCategoryActions.productCategoryRemoveRequest({ payload })
    );

  constructor(private readonly store: Store) {}
}
