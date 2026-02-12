import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import * as UserListActions from './user-list.actions';
import { UserRepository } from '../../data/user.repository';
import { of } from 'rxjs';
import { mapUserToListItem } from '../../models';

export const loadUserListEffect = createEffect(
  (actions$ = inject(Actions), userRepository = inject(UserRepository)) => {
    return actions$.pipe(
      ofType(UserListActions.loadUserList),
      switchMap(() =>
        userRepository.list().pipe(
          map((users) =>
            UserListActions.loadUserListSuccess({
              items: users.map((user) => mapUserToListItem(user)),
            })
          ),
          catchError((error) =>
            of(
              UserListActions.loadUserListFailure({
                error: error.message ?? 'Failed to load users',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
