import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  IoRestorecommerceOrderItem,
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

@Component({
  selector: 'rc-order-view',
  templateUrl: './order-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderViewComponent implements OnInit {
  @Input({ required: true }) order!: IOrder;

  @Output() openAddItemModal = new EventEmitter<void>();
  @Output() openAddressModal = new EventEmitter<string>();
  @Output() openEditOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();
  @Output() openDeleteOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();

  product?: IoRestorecommerceProductPhysicalVariant | null;
  customer?: IoRestorecommerceUserUser | null;

  ngOnInit(): void {
    this.product =
      this.order.items?.[0]?.product?.product?.physical?.variants?.[0];

    this.customer = this.order.customer?.private?.user || this.order.user;
  }
}
