import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  IIoRestorecommerceShopShopList,
  MasterDataShopDeleteMutateGQL,
  MasterDataShopDeleteMutateMutation,
  MasterDataShopMutateGQL,
  MasterDataShopMutateMutation,
  MasterDataShopReadGQL,
  MasterDataShopReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(
    private readonly masterDataShopReadGQL: MasterDataShopReadGQL,
    private readonly masterDataShopMutateGQL: MasterDataShopMutateGQL,
    private readonly masterDataShopDeleteMutateGQL: MasterDataShopDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataShopReadQuery>> {
    return this.masterDataShopReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceShopShopList
  ): Observable<MutationResult<MasterDataShopMutateMutation>> {
    return this.masterDataShopMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataShopDeleteMutateMutation>> {
    return this.masterDataShopDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
