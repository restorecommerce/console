import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as UserCreationActions from './user-create.actions';
import { UserRepository } from '../../data/user.repository';
import { of } from 'rxjs';
import { Router } from '@angular/router';

export const loadUserCreationEffect = createEffect(
  (actions$ = inject(Actions), userRepository = inject(UserRepository)) => {
    return actions$.pipe(
      ofType(UserCreationActions.createUser),
      switchMap(({ command }) =>
        userRepository.createUser(command).pipe(
          map((res) => UserCreationActions.createUserSuccess({ id: res.id })),
          catchError((error) =>
            of(UserCreationActions.createUserFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const navigateOnUserCreateSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(UserCreationActions.createUserSuccess),
      tap(({ id }) => {
        router.navigate(['/iam/users', id]);
      })
    );
  },
  { functional: true, dispatch: false }
);
