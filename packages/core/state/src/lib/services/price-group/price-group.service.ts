import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceManufacturerManufacturerList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  PriceGroupDeleteGQL,
  PriceGroupDeleteMutation,
  PriceGroupMutateGQL,
  PriceGroupMutateMutation,
  PriceGroupReadGQL,
  PriceGroupReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class PriceGroupService {
  constructor(
    private readonly priceGroupReadGQL: PriceGroupReadGQL,
    private readonly priceGroupMutationGQL: PriceGroupMutateGQL,
    private readonly priceGroupDeleteGQL: PriceGroupDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<PriceGroupReadQuery>> {
    return this.priceGroupReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceManufacturerManufacturerList
  ): Observable<MutationResult<PriceGroupMutateMutation>> {
    return this.priceGroupMutationGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<PriceGroupDeleteMutation>> {
    return this.priceGroupDeleteGQL.mutate({
      input: payload,
    });
  }
}
