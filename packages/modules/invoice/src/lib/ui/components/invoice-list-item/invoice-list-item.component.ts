import { Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { InvoiceListItem } from '../../../models';

@Component({
  selector: 'app-invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  imports: [VCLBadgeComponent],
})
export class InvoiceListItemComponent {
  @Input({ required: true })
  item!: InvoiceListItem;

  getPaymentBadgeType(state: 'UNPAYED' | 'PAYED') {
    switch (state) {
      case 'PAYED':
        return 'success';
      case 'UNPAYED':
        return 'warning';
      default:
        return 'info';
    }
  }
}
