import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as IAMUserViewActions from './user-view.actions';

import { of } from 'rxjs';
import { UserRepository } from '../../data/user.repository';
import { mapUserToDetailVM } from '../../models';

export const loadIAMUserViewEffect = createEffect(
  (actions$ = inject(Actions), iamUserRepository = inject(UserRepository)) => {
    return actions$.pipe(
      ofType(IAMUserViewActions.enterPage),
      switchMap(({ iamUserId }) =>
        iamUserRepository.getUser(iamUserId).pipe(
          map((iamUser) =>
            IAMUserViewActions.loadIAMUserSuccess({
              iamUser: mapUserToDetailVM(iamUser),
            })
          ),
          catchError((error) =>
            of(
              IAMUserViewActions.loadIAMUserFailure({
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
