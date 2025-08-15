import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceProductPrototypeProductPrototypeList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  ProductPrototypeDeleteGQL,
  ProductPrototypeDeleteMutation,
  ProductPrototypeMutateGQL,
  ProductPrototypeMutateMutation,
  ProductPrototypeReadGQL,
  ProductPrototypeReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductPrototypeService {
  constructor(
    private readonly productPrototypeReadGQL: ProductPrototypeReadGQL,
    private readonly productPrototypeMutationGQL: ProductPrototypeMutateGQL,
    private readonly productPrototypeDeleteGQL: ProductPrototypeDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<ProductPrototypeReadQuery>> {
    return this.productPrototypeReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceProductPrototypeProductPrototypeList
  ): Observable<MutationResult<ProductPrototypeMutateMutation>> {
    return this.productPrototypeMutationGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<ProductPrototypeDeleteMutation>> {
    return this.productPrototypeDeleteGQL.mutate({
      input: payload,
    });
  }
}
