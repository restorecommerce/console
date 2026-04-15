import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { InvoiceRepository } from '../../data/user.repository';
import { mapInvoiceToDetailVM } from '../../models';

import * as InvoiceViewActions from './invoice-view.actions';

export const loadInvoiceViewEffect = createEffect(
  (
    actions$ = inject(Actions),
    invoiceRepository = inject(InvoiceRepository)
  ) => {
    return actions$.pipe(
      ofType(InvoiceViewActions.enterPage),
      switchMap(({ invoiceId }) =>
        invoiceRepository.getInvoice(invoiceId).pipe(
          map((invoice) =>
            InvoiceViewActions.loadInvoiceSuccess({
              invoice: mapInvoiceToDetailVM(invoice),
            })
          ),
          catchError((error) =>
            of(
              InvoiceViewActions.loadInvoiceFailure({
                error: error.message ?? 'Failed to load invoice',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
