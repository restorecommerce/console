import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceManufacturerManufacturerList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  ManufucturerDeleteGQL,
  ManufucturerDeleteMutation,
  ManufucturerMutateGQL,
  ManufucturerMutateMutation,
  ManufucturerReadGQL,
  ManufucturerReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  constructor(
    private readonly manufacturerReadGQL: ManufucturerReadGQL,
    private readonly manufacturerMutationGQL: ManufucturerMutateGQL,
    private readonly manufacturerDeleteGQL: ManufucturerDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<ManufucturerReadQuery>> {
    return this.manufacturerReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceManufacturerManufacturerList
  ): Observable<MutationResult<ManufucturerMutateMutation>> {
    return this.manufacturerMutationGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<ManufucturerDeleteMutation>> {
    return this.manufacturerDeleteGQL.mutate({
      input: payload,
    });
  }
}
