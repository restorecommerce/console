import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as FulfillmentViewActions from './fulfillment-view.actions';

import { of } from 'rxjs';
import { FulfillmentRepository } from '../../data/fulfillment.repository';
import { mapFulfillmentDto } from '../../models';

export const loadFulfillmentViewEffect = createEffect(
  (
    actions$ = inject(Actions),
    fulfillmentsRepository = inject(FulfillmentRepository)
  ) => {
    return actions$.pipe(
      ofType(FulfillmentViewActions.enterPage),
      switchMap(({ fulfillmentId }) =>
        fulfillmentsRepository.getFulfillment(fulfillmentId).pipe(
          map((fulfillment) =>
            FulfillmentViewActions.loadFulfillmentSuccess({
              fulfillment: mapFulfillmentDto(fulfillment),
            })
          ),
          catchError((error) =>
            of(
              FulfillmentViewActions.loadFulfillmentFailure({
                error: error.message ?? 'Failed to load fulfillmentss',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);

export const submitFulfillmentViewEffect = createEffect(
  (
    actions$ = inject(Actions),
    fulfillmentsRepository = inject(FulfillmentRepository)
  ) => {
    return actions$.pipe(
      ofType(FulfillmentViewActions.fulfillmentSubmitRequest),
      switchMap(({ fulfillmentId }) =>
        fulfillmentsRepository.submit(fulfillmentId).pipe(
          map((fulfillment) =>
            FulfillmentViewActions.fulfillmentSubmitSuccess({
              fulfillment: mapFulfillmentDto(fulfillment),
            })
          ),
          catchError((error) =>
            of(
              FulfillmentViewActions.fulfillmentSubmitFailure({
                error: error.message ?? 'Failed to submit fulfillment',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
