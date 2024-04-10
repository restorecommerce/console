import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  InvoiceFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-invoice-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-invoice-view [invoice]="vm.invoice" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.invoiceFacade.setSelectedId(id);
      })
    ),
    invoice: this.invoiceFacade.selected$.pipe(
      tap((invoice) => {
        if (!invoice) {
          this.invoiceFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.invoices.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly invoiceFacade: InvoiceFacade
  ) {}
}
