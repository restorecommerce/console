import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as UserUpdateActions from './user-edit.actions';
import { UserRepository } from '../../data/user.repository';
import { of } from 'rxjs';
import { mapUserUpdateFormValue } from '../../models';

export const loadUserEffect = createEffect(
  (actions$ = inject(Actions), iamUserRepository = inject(UserRepository)) => {
    return actions$.pipe(
      ofType(UserUpdateActions.loadUser),
      switchMap(({ id }) =>
        iamUserRepository.getUser(id).pipe(
          map((iamUser) =>
            UserUpdateActions.loadUserSuccess({
              user: mapUserUpdateFormValue(iamUser),
            })
          ),
          catchError((error) =>
            of(
              UserUpdateActions.loadUserFailure({
                error: error.message ?? 'Failed to load iamUser',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);

export const updatedUserEffect = createEffect(
  (actions$ = inject(Actions), userRepository = inject(UserRepository)) => {
    return actions$.pipe(
      ofType(UserUpdateActions.updateUser),
      switchMap(({ command }) =>
        userRepository.updateUser(command).pipe(
          map((res) => UserUpdateActions.updateUserSuccess({ id: res.id })),
          catchError((error) =>
            of(UserUpdateActions.updateUserFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
