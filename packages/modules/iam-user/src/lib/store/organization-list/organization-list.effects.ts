import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as OrganizationListActions from './organization-list.actions';
import { OrganizationRepository } from '../../data/organization.repository';
import { of } from 'rxjs';

export const loadOrganizationListEffect = createEffect(
  (
    actions$ = inject(Actions),
    organizationRepository = inject(OrganizationRepository)
  ) => {
    return actions$.pipe(
      ofType(OrganizationListActions.loadOrganizationList),
      switchMap(() =>
        organizationRepository.list().pipe(
          map((organizations) =>
            OrganizationListActions.loadOrganizationListSuccess({
              items: organizations.map((organization) => ({
                id: `${organization.id}`,
                name: `${organization.name}`,
              })),
            })
          ),
          catchError((error) =>
            of(
              OrganizationListActions.loadOrganizationListFailure({
                error: error.message ?? 'Failed to load organizations',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
