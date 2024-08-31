import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';

@Component({
  selector: 'rc-order-item',
  templateUrl: './order-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class RcOrderItemComponent {
  @HostBinding('class') classNames = 'order-item';

  @Input({ required: true })
  item!: IoRestorecommerceOrderItem;

  @Output() openEditOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();
}
