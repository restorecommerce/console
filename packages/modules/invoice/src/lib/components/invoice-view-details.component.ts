import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IInvoice } from '@console-core/types';

@Component({
  selector: 'app-module-invoice-view-details',
  template: `
    <pre>
      {{ invoice | json }}
    </pre
    >
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceViewDetailsComponent {
  @Input({ required: true }) invoice!: IInvoice;
}
