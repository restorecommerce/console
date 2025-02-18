import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  MasterDataShopReadGQL,
  MasterDataShopReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private readonly masterDataShopReadGQL: MasterDataShopReadGQL) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<MasterDataShopReadQuery>> {
    return this.masterDataShopReadGQL.fetch({
      input: payload,
    });
  }
}
