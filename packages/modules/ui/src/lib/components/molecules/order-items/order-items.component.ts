import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';

@Component({
  selector: 'rc-order-items',
  templateUrl: './order-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemsComponent {
  @Input({ required: true })
  items: IoRestorecommerceOrderItem[] = [];

  @Output() openAddItemModal = new EventEmitter<void>();
  @Output() openEditOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();
  @Output() openDeleteOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();
}
