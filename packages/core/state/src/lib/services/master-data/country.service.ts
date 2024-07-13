import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceCountryCountryList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataCountryDeleteMutateGQL,
  MasterDataCountryDeleteMutateMutation,
  MasterDataCountryMutateGQL,
  MasterDataCountryMutateMutation,
  MasterDataCountryReadGQL,
  MasterDataCountryReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(
    private readonly masterDataCountryReadGQL: MasterDataCountryReadGQL,
    private readonly masterDataCountryMutateGQL: MasterDataCountryMutateGQL,
    private readonly masterDataCountryDeleteMutateGQL: MasterDataCountryDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataCountryReadQuery>> {
    return this.masterDataCountryReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceCountryCountryList
  ): Observable<MutationResult<MasterDataCountryMutateMutation>> {
    return this.masterDataCountryMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataCountryDeleteMutateMutation>> {
    return this.masterDataCountryDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
