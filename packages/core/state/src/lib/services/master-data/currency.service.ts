import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceCurrencyCurrencyList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataCurrencyDeleteMutateGQL,
  MasterDataCurrencyDeleteMutateMutation,
  MasterDataCurrencyMutateGQL,
  MasterDataCurrencyMutateMutation,
  MasterDataCurrencyReadGQL,
  MasterDataCurrencyReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(
    private readonly masterDataCurrencyReadGQL: MasterDataCurrencyReadGQL,
    private readonly masterDataCurrencyMutateGQL: MasterDataCurrencyMutateGQL,
    private readonly masterDataCurrencyDeleteMutateGQL: MasterDataCurrencyDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataCurrencyReadQuery>> {
    return this.masterDataCurrencyReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceCurrencyCurrencyList
  ): Observable<MutationResult<MasterDataCurrencyMutateMutation>> {
    return this.masterDataCurrencyMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataCurrencyDeleteMutateMutation>> {
    return this.masterDataCurrencyMutateGQL.mutate({
      input: payload,
    });
  }
}
