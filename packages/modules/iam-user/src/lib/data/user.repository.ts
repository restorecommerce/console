import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  UserListReadGQL,
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceUserUserRole,
  IoRestorecommerceResourcebaseFilterOperation,
  UserDetailReadGQL,
} from '@console-core/graphql';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  private readonly userListReadGQL = inject(UserListReadGQL);
  private readonly userDetailReadGQL = inject(UserDetailReadGQL);

  list(): Observable<IoRestorecommerceUserUserRole[]> {
    return this.userListReadGQL
      .fetch({
        input: {},
      })
      .pipe(
        map((result) => {
          const items = result.data?.identity?.user?.Read?.details?.items;

          if (!items) {
            throw new Error('User list response is malformed');
          }

          return items.map((item) => {
            if (!item?.payload) {
              throw new Error('User list item payload is missing');
            }

            return item.payload as IoRestorecommerceUserUserRole;
          });
        })
      );
  }

  getUser(
    id: string // orderId
  ): Observable<IoRestorecommerceUserUserRole> {
    // TODO Should be a general util...
    const input: IIoRestorecommerceResourcebaseReadRequest = {
      filters: [
        {
          filters: [
            {
              field: 'id',
              value: id,
              operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
            },
          ],
        },
      ],
    };

    return this.userDetailReadGQL.fetch({ input }).pipe(
      map((result) => {
        const fulfillment =
          result.data?.identity?.user?.Read?.details?.items?.[0]?.payload;

        if (!fulfillment) {
          throw new Error('User not found or response is malformed');
        }

        return fulfillment as IoRestorecommerceUserUserRole;
      })
    );
  }
}
