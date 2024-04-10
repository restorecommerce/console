import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  InvoiceFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-invoice',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Invoices</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceIndexComponent {
  readonly vm$ = combineLatest({
    selectedInvoiceId: this.invoiceFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.invoices.children.view.getLink({ id })
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly invoiceFacade: InvoiceFacade
  ) {}
}
