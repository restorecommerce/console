import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { UserRepository } from '../../data/user.repository';

import * as UserCreationActions from './user-create.actions';

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

export const navigateAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(UserCreationActions.createUserSuccess),
      tap(({ id }) => {
        router.navigate(['/iam', id, 'view']);
      })
    );
  },
  { functional: true, dispatch: false }
);
