import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceCountryCountryList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataCountryDeleteGQL,
  MasterDataCountryDeleteMutation,
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
    private readonly masterDataCountryDeleteGQL: MasterDataCountryDeleteGQL
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

  delete(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataCountryDeleteMutation>> {
    return this.masterDataCountryDeleteGQL.mutate({
      input: payload,
    });
  }
}
