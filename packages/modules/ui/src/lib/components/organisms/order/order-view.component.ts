import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';
import { IOrder, IProduct } from '@console-core/types';

@Component({
  selector: 'rc-order-view',
  templateUrl: './order-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderViewComponent implements OnInit {
  @Input({ required: true }) order!: IOrder;
  @Input({ required: true }) products!: IProduct[];

  product?: IoRestorecommerceProductPhysicalVariant | null;
  customer?: IoRestorecommerceUserUser | null;

  ngOnInit(): void {
    this.product =
      this.order.items?.[0]?.product?.product?.physical?.variants?.[0];

    this.customer = this.order.customer?.private?.user || this.order.user;
  }
}
