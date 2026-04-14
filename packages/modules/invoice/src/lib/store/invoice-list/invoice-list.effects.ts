import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { InvoiceRepository } from '../../data/invoice.repository';
import { mapInvoiceToListItem } from '../../models';

import * as InvoiceListActions from './invoice-list.actions';

export const loadInvoiceListEffect = createEffect(
  (
    actions$ = inject(Actions),
    invoiceRepository = inject(InvoiceRepository)
  ) => {
    return actions$.pipe(
      ofType(InvoiceListActions.loadInvoiceList),
      switchMap(() =>
        invoiceRepository.list().pipe(
          map((invoices) =>
            InvoiceListActions.loadInvoiceListSuccess({
              items: invoices.map((invoice) => mapInvoiceToListItem(invoice)),
            })
          ),
          catchError((error) =>
            of(
              InvoiceListActions.loadInvoiceListFailure({
                error: error.message ?? 'Failed to load invoices',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
