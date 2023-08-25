import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataTimezoneReadGQL,
  MasterDataTimezoneReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  constructor(
    private readonly masterDataTimezoneReadGQL: MasterDataTimezoneReadGQL
  ) {}

  timezoneRead(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataTimezoneReadQuery>> {
    return this.masterDataTimezoneReadGQL.fetch({
      input: payload,
    });
  }
}
