import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IInvoice } from '@console-core/types';

@Component({
  selector: 'rc-invoice-view',
  templateUrl: './invoice-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcInvoiceViewComponent {
  @Input({ required: true }) invoice!: IInvoice;
}
