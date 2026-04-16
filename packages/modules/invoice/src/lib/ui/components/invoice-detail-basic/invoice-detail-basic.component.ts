import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { InvoiceDetail } from '../../../models';

@Component({
  selector: 'app-invoice-detail-basic',
  imports: [DatePipe],
  templateUrl: './invoice-detail-basic.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceDetailBasicComponent {
  @Input({ required: true }) invoice!: InvoiceDetail;

  get orderReferences() {
    return this.invoice.references.filter(
      (reference) => reference.label === 'Order'
    );
  }

  get fulfillmentReferences() {
    return this.invoice.references.filter(
      (reference) => reference.label === 'Fulfillment'
    );
  }

  get hasOrders(): boolean {
    return this.orderReferences.length > 0;
  }

  get hasFulfillments(): boolean {
    return this.fulfillmentReferences.length > 0;
  }
}
