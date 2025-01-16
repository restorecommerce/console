import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  IIoRestorecommerceTaxTaxList,
  MasterDataTaxDeleteMutateGQL,
  MasterDataTaxDeleteMutateMutation,
  MasterDataTaxMutateGQL,
  MasterDataTaxMutateMutation,
  MasterDataTaxReadGQL,
  MasterDataTaxReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  constructor(
    private readonly masterDataTaxReadGQL: MasterDataTaxReadGQL,
    private readonly masterDataTaxMutateGQL: MasterDataTaxMutateGQL,
    private readonly masterDataTaxDeleteMutateGQL: MasterDataTaxDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataTaxReadQuery>> {
    return this.masterDataTaxReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceTaxTaxList
  ): Observable<MutationResult<MasterDataTaxMutateMutation>> {
    return this.masterDataTaxMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataTaxDeleteMutateMutation>> {
    return this.masterDataTaxDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
