import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import * as FulfillmentListActions from './fulfillment-list.actions';
import { FulfillmentRepository } from '../../data/fulfillment.repository';
import { of } from 'rxjs';
import { mapFulfillmentToListItem } from '../../models/fulfillment-list.mapper';

export const loadFulfillmentListEffect = createEffect(
  (
    actions$ = inject(Actions),
    fulfillmentRepository = inject(FulfillmentRepository)
  ) => {
    return actions$.pipe(
      ofType(FulfillmentListActions.loadFulfillmentList),
      switchMap(() =>
        fulfillmentRepository.list().pipe(
          map((fulfillments) =>
            FulfillmentListActions.loadFulfillmentListSuccess({
              items: fulfillments.map((fulfillment) =>
                mapFulfillmentToListItem(fulfillment)
              ),
            })
          ),
          catchError((error) =>
            of(
              FulfillmentListActions.loadFulfillmentListFailure({
                error: error.message ?? 'Failed to load fulfillments',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
