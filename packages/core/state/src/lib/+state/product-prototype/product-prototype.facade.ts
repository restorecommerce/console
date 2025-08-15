import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceProductPrototypeProductPrototypeList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as productPrototypeActions from './product-prototype.actions';
import * as productPrototypeSelectors from './product-prototype.selectors';

@Injectable()
export class ProductPrototypeFacade {
  // Selectors
  readonly ids$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeIds
  );
  readonly entities$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeEntities
  );
  readonly all$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeAll
  );
  readonly total$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeTotal
  );
  readonly selectedId$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeSelectedId
  );
  readonly selected$ = this.store.select(
    productPrototypeSelectors.selectProductPrototypeSelected
  );
  readonly actionStatus$ = this.store.select(
    productPrototypeSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(productPrototypeSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      productPrototypeActions.productPrototypeReadRequest({ payload })
    );

  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      productPrototypeActions.productPrototypeReadOneByIdRequest({ payload })
    );

  setSelectedId = (payload: string | null) =>
    this.store.dispatch(productPrototypeActions.setSelectedId({ payload }));

  create = (payload: IIoRestorecommerceProductPrototypeProductPrototypeList) =>
    this.store.dispatch(
      productPrototypeActions.productPrototypeCreateRequest({ payload })
    );
  update = (payload: IIoRestorecommerceProductPrototypeProductPrototypeList) =>
    this.store.dispatch(
      productPrototypeActions.productPrototypeUpdateRequest({ payload })
    );
  remove = (payload: { id: string }) =>
    this.store.dispatch(
      productPrototypeActions.productPrototypeRemoveRequest({ payload })
    );

  constructor(private readonly store: Store) {}
}
