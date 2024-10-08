import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceOrganizationOrganizationList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataOrganizationDeleteMutateGQL,
  MasterDataOrganizationDeleteMutateMutation,
  MasterDataOrganizationMutateGQL,
  MasterDataOrganizationMutateMutation,
  MasterDataOrganizationReadGQL,
  MasterDataOrganizationReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(
    private readonly masterDataOrganizationReadGQL: MasterDataOrganizationReadGQL,
    private readonly masterDataOrganizationMutateGQL: MasterDataOrganizationMutateGQL,
    private readonly masterDataOrganizationDeleteMutateGQL: MasterDataOrganizationDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataOrganizationReadQuery>> {
    return this.masterDataOrganizationReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceOrganizationOrganizationList
  ): Observable<MutationResult<MasterDataOrganizationMutateMutation>> {
    return this.masterDataOrganizationMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<MasterDataOrganizationDeleteMutateMutation>> {
    return this.masterDataOrganizationDeleteMutateGQL.mutate({
      input: payload,
    });
  }
}
