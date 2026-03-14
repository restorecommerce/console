import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import {
  UserListReadGQL,
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceUserUserRole,
  IoRestorecommerceResourcebaseFilterOperation,
  UserDetailReadGQL,
  IdentityUserCreateGQL,
  ModeType,
} from '@console-core/graphql';

import { CreateUserCommand, UpdateUserCommand } from '../commands';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  private readonly userListReadGQL = inject(UserListReadGQL);
  private readonly userDetailReadGQL = inject(UserDetailReadGQL);
  private readonly userCreateGQL = inject(IdentityUserCreateGQL);

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

  createUser(command: CreateUserCommand): Observable<{ id: string }> {
    return this.userCreateGQL
      .mutate({
        input: {
          items: [command],
          scope: command.defaultScope,
          mode: ModeType.Create,
        },
      })
      .pipe(
        map((result) => {
          const details = result.data?.identity.user.Mutate?.details;

          const opStatus = details?.operationStatus;
          const item = details?.items?.[0];

          if (!opStatus || opStatus.code !== 200) {
            throw new Error(
              opStatus?.message || 'User creation failed (operation error)'
            );
          }

          if (!item || item.status?.code !== 200) {
            throw new Error(
              `User creation failed (item status: ${item?.status})`
            );
          }

          const userId = item.payload?.id;

          if (!userId) {
            throw new Error('User creation succeeded but no ID returned');
          }

          return { id: userId };
        }),
        catchError((error) => {
          // Normalize GraphQL / network / runtime errors
          const message =
            error?.message || 'Unexpected error during user creation';

          return throwError(() => new Error(message));
        })
      );
  }

  updateUser(command: UpdateUserCommand): Observable<{ id: string }> {
    return this.userCreateGQL
      .mutate({
        input: {
          items: [command],
          scope: command.defaultScope,
          mode: ModeType.Update,
        },
      })
      .pipe(
        map((result) => {
          const details = result.data?.identity.user.Mutate?.details;

          const opStatus = details?.operationStatus;
          const item = details?.items?.[0];

          if (!opStatus || opStatus.code !== 200) {
            throw new Error(
              opStatus?.message || 'User update failed (operation error)'
            );
          }

          if (!item || item.status?.code !== 200) {
            throw new Error(
              `User update failed (item status: ${item?.status})`
            );
          }

          const userId = item.payload?.id;

          if (!userId) {
            throw new Error('User update succeeded but no ID returned');
          }

          return { id: userId };
        }),
        catchError((error) => {
          // Normalize GraphQL / network / runtime errors
          const message =
            error?.message || 'Unexpected error during user update';

          return throwError(() => new Error(message));
        })
      );
  }
}
