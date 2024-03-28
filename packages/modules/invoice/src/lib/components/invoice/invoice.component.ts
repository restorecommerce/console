import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-invoice-index',
  template: `
    <div>
      <p>Invoice content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceComponent {}
