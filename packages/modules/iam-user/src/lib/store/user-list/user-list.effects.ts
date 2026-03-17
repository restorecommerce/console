import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserRepository } from '../../data/user.repository';
import { mapUserToListItem } from '../../models';
import * as UserCreateActions from '../user-create';
import * as UserUpdateActions from '../user-edit';

import * as UserListActions from './user-list.actions';

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

export const reloadUserListOnMutationEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(
        UserUpdateActions.updateUserSuccess,
        UserCreateActions.createUserSuccess
      ),
      map(() => UserListActions.loadUserList())
    );
  },
  { functional: true }
);
