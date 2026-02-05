import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FulfillmentListItem } from '../../../models';
import { FulfillmentStateBadgeComponent } from '../fulfillment-state-badge/fulfillment-state-badge.component';

@Component({
  selector: 'app-fulfillment-data-list-item',
  templateUrl: './fulfillment-data-list-item.component.html',
  imports: [DatePipe, SlicePipe, CurrencyPipe, FulfillmentStateBadgeComponent],
})
export class FulfillmentDataListItemComponent {
  @Input({ required: true })
  item!: FulfillmentListItem;

  @Output()
  selectItem = new EventEmitter<FulfillmentListItem>();
}
