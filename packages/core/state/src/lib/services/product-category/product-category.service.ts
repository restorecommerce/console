import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceManufacturerManufacturerList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  ProductCategoryDeleteGQL,
  ProductCategoryDeleteMutation,
  ProductCategoryMutateGQL,
  ProductCategoryMutateMutation,
  ProductCategoryReadGQL,
  ProductCategoryReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(
    private readonly productCategoryReadGQL: ProductCategoryReadGQL,
    private readonly productCategoryMutationGQL: ProductCategoryMutateGQL,
    private readonly productCategoryDeleteGQL: ProductCategoryDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<ProductCategoryReadQuery>> {
    return this.productCategoryReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceManufacturerManufacturerList
  ): Observable<MutationResult<ProductCategoryMutateMutation>> {
    return this.productCategoryMutationGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<ProductCategoryDeleteMutation>> {
    return this.productCategoryDeleteGQL.mutate({
      input: payload,
    });
  }
}
