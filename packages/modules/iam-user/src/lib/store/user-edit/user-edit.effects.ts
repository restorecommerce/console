import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { RcNotifierService } from '@console/rc-ui';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';

import { UserRepository } from '../../data/user.repository';
import { mapUserUpdateFormValue } from '../../models';

import * as UserUpdateActions from './user-edit.actions';

export const loadEditUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    iamUserRepository = inject(UserRepository),
    notifier = inject(RcNotifierService)
  ) => {
    return actions$.pipe(
      ofType(UserUpdateActions.loadUser),
      switchMap(({ id }) =>
        iamUserRepository.getUser(id).pipe(
          map((iamUser) =>
            UserUpdateActions.loadUserSuccess({
              user: mapUserUpdateFormValue(iamUser),
            })
          ),
          catchError((error) => {
            notifier.error(error.message ?? 'Failed to load user');
            return of(
              UserUpdateActions.loadUserFailure({
                error: error.message ?? 'Failed to load iamUser',
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const updatedUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    userRepository = inject(UserRepository),
    notifier = inject(RcNotifierService)
  ) => {
    return actions$.pipe(
      ofType(UserUpdateActions.updateUser),
      switchMap(({ command }) =>
        userRepository.updateUser(command).pipe(
          map((res) => UserUpdateActions.updateUserSuccess({ id: res.id })),
          catchError((error) => {
            notifier.error(error.message ?? 'Failed to update user');
            return of(
              UserUpdateActions.updateUserFailure({ error: error.message })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const navigateAfterUpdateEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    notifier = inject(RcNotifierService)
  ) => {
    return actions$.pipe(
      ofType(UserUpdateActions.updateUserSuccess),
      tap(({ id }) => {
        notifier.success('User updated successfully');
        router.navigate(
          ROUTER.pages.main.children.iam.children.view.getLink({ id })
        );
      })
    );
  },
  { functional: true, dispatch: false }
);
