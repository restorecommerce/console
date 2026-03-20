import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { RcNotifierService } from '@console/rc-ui';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';

import { UserRepository } from '../../data/user.repository';

import * as UserCreationActions from './user-create.actions';

export const loadUserCreationEffect = createEffect(
  (
    actions$ = inject(Actions),
    userRepository = inject(UserRepository),
    notifier = inject(RcNotifierService)
  ) => {
    return actions$.pipe(
      ofType(UserCreationActions.createUser),
      switchMap(({ command }) =>
        userRepository.createUser(command).pipe(
          map((res) => UserCreationActions.createUserSuccess({ id: res.id })),
          catchError((error) => {
            notifier.error(
              'Create failed',
              error.message ?? 'Failed to create user'
            );
            return of(
              UserCreationActions.createUserFailure({ error: error.message })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const navigateAfterCreateEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    notifier = inject(RcNotifierService)
  ) => {
    return actions$.pipe(
      ofType(UserCreationActions.createUserSuccess),
      tap(({ id }) => {
        notifier.success('User created successfully');
        router.navigate(
          ROUTER.pages.main.children.iam.children.view.getLink({ id })
        );
      })
    );
  },
  { functional: true, dispatch: false }
);
