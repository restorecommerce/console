import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as RoleListActions from './role-list.actions';
import { of } from 'rxjs';
import { RoleRepository } from '../../data';

export const loadRoleListEffect = createEffect(
  (actions$ = inject(Actions), roleRepository = inject(RoleRepository)) => {
    return actions$.pipe(
      ofType(RoleListActions.loadRoleList),
      switchMap(() =>
        roleRepository.list().pipe(
          map((roles) =>
            RoleListActions.loadRoleListSuccess({
              items: roles.map((role) => ({
                id: `${role.id}`,
                name: `${role.name}`,
                description: role.description ?? '',
              })),
            })
          ),
          catchError((error) =>
            of(
              RoleListActions.loadRoleListFailure({
                error: error.message ?? 'Failed to load roles',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
