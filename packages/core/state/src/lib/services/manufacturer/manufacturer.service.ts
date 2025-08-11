import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  ManufucturerReadGQL,
  ManufucturerReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  constructor(private readonly manufacturerReadGQL: ManufucturerReadGQL) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<ManufucturerReadQuery>> {
    return this.manufacturerReadGQL.fetch({
      input: payload,
    });
  }
}
