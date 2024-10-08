import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  IIoRestorecommerceRoleRoleList,
  IdentityRoleDeleteMutateGQL,
  IdentityRoleDeleteMutateMutation,
  IdentityRoleMutateGQL,
  IdentityRoleMutateMutation,
  IdentityRoleReadGQL,
  IdentityRoleReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private assignableByRolesFormattedCache: Record<string, string> = {};

  constructor(
    private readonly identityRoleReadGQL: IdentityRoleReadGQL,
    private readonly identityRoleMutateGQL: IdentityRoleMutateGQL,
    private readonly identityRoleDeleteMutateGQL: IdentityRoleDeleteMutateGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<IdentityRoleReadQuery>> {
    return this.identityRoleReadGQL.fetch({ input: payload });
  }

  mutate(
    payload: IIoRestorecommerceRoleRoleList
  ): Observable<MutationResult<IdentityRoleMutateMutation>> {
    return this.identityRoleMutateGQL.mutate({ input: payload });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<IdentityRoleDeleteMutateMutation>> {
    return this.identityRoleDeleteMutateGQL.mutate({ input: payload });
  }
}
