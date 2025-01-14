import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceProductProductList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as productActions from './product.actions';
import * as productSelectors from './product.selectors';

const addTemporaryMetaForCatalogSrv = (
  // Hack for catalog srv. Can't wait for it to be fixed!
  payload: IIoRestorecommerceProductProductList
) => {
  const item = (payload.items ?? [])[0];

  // Hack to this bloody catalog-srv.
  if (item) {
    item.meta = {
      owners: [
        {
          id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
          value: 'urn:restorecommerce:acs:model:organization.Organization',
          attributes: [
            {
              id: 'urn:restorecommerce:acs:names:ownerInstance',
              value: 'nfuse-shop-000-organization',
            },
          ],
        },
      ],
    };
  }

  return payload;
};

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
    const tempPayload = addTemporaryMetaForCatalogSrv(payload);
    this.store.dispatch(
      productActions.productCreateRequest({ payload: tempPayload })
    );
  };

  update = (payload: IIoRestorecommerceProductProductList) => {
    const tempPayload = addTemporaryMetaForCatalogSrv(payload);
    this.store.dispatch(
      productActions.productUpdateRequest({ payload: tempPayload })
    );
  };

  remove = (payload: { id: string }) =>
    this.store.dispatch(productActions.productRemoveRequest({ payload }));

  constructor(private readonly store: Store) {}
}
