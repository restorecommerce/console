import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataLocaleReadGQL,
  MasterDataLocaleReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  constructor(
    private readonly masterDataLocaleReadGQL: MasterDataLocaleReadGQL
  ) {}

  localeRead(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataLocaleReadQuery>> {
    return this.masterDataLocaleReadGQL.fetch({
      input: payload,
    });
  }
}
