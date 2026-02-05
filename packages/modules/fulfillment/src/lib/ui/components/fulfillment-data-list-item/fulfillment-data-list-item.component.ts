import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { FulfillmentListItem } from '../../../models';

@Component({
  selector: 'app-fulfillment-data-list-item',
  templateUrl: './fulfillment-data-list-item.component.html',
  imports: [DatePipe, SlicePipe, CurrencyPipe, VCLBadgeComponent],
})
export class FulfillmentDataListItemComponent {
  @Input({ required: true })
  item!: FulfillmentListItem;

  @Output()
  selectItem = new EventEmitter<FulfillmentListItem>();
}
