import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  IIoRestorecommerceCustomerCustomerList,
  MasterDataCustomerDeleteMutateGQL,
  MasterDataCustomerDeleteMutateMutation,
  MasterDataCustomerMutateGQL,
  MasterDataCustomerMutateMutation,
  MasterDataCustomerReadGQL,
  MasterDataCustomerReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private readonly masterDataCustomerReadGQL: MasterDataCustomerReadGQL,
    private readonly masterDataCustomerMutateGQL: MasterDataCustomerMutateGQL,
    private readonly masterDataCustomerDeleteMutateGQL: MasterDataCustomerDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataCustomerReadQuery>> {
    return this.masterDataCustomerReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceCustomerCustomerList
  ): Observable<MutationResult<MasterDataCustomerMutateMutation>> {
    return this.masterDataCustomerMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataCustomerDeleteMutateMutation>> {
    return this.masterDataCustomerDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
