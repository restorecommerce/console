import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';

@Component({
  selector: 'rc-order-items',
  templateUrl: './order-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemsComponent {
  @Input({ required: true })
  items: IoRestorecommerceOrderItem[] = [];
}
