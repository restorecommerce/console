import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { InvoiceFacade } from '@console-core/state';

import { buildInvoiceSchema } from './jss-forms';

@Component({
  selector: 'app-module-invoice-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildInvoiceSchema({});
  create = this.invoiceFacade.create;

  readonly vm$ = combineLatest({
    invoice: this.invoiceFacade.selected$,
  });

  constructor(private readonly invoiceFacade: InvoiceFacade) {}
}
