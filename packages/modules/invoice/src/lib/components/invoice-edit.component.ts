import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  InvoiceFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildInvoiceSchema } from './jss-forms';

@Component({
  selector: 'app-module-invoice-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.invoiceFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
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
      filterEmptyAndNullishAndUndefined(),
      tap((invoice) => {
        this.schema = buildInvoiceSchema({ invoice });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly invoiceFacade: InvoiceFacade
  ) {}
}
