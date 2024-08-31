import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';

@Component({
  selector: 'rc-order-item',
  templateUrl: './order-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemComponent {
  @Input({ required: true })
  item!: IoRestorecommerceOrderItem;

  @Output() openEditItemModal = new EventEmitter<void>();
}
