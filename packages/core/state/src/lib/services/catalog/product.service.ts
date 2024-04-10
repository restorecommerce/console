import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceProductProductList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  CatalogProductDeleteGQL,
  CatalogProductDeleteMutation,
  CatalogProductMutateGQL,
  CatalogProductMutateMutation,
  CatalogProductReadGQL,
  CatalogProductReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private readonly catalogProductReadGQL: CatalogProductReadGQL,
    private readonly catalogProductMutateGQL: CatalogProductMutateGQL,
    private readonly catalogProductDeleteGQL: CatalogProductDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<CatalogProductReadQuery>> {
    return this.catalogProductReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceProductProductList
  ): Observable<MutationResult<CatalogProductMutateMutation>> {
    return this.catalogProductMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<CatalogProductDeleteMutation>> {
    return this.catalogProductDeleteGQL.mutate({
      input: payload,
    });
  }
}
