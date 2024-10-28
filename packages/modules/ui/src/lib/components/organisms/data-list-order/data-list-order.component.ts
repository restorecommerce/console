import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceShopShop,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

dayjs.extend(relativeTime);

@Component({
  selector: 'rc-data-list-order',
  templateUrl: './data-list-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListOrderComponent implements OnInit {
  @HostBinding('class.data-list-order')
  _hostClasses = true;

  @Input({ required: true }) order!: IOrder;

  dayjs = dayjs;

  product?: IoRestorecommerceProductPhysicalVariant | null;
  customer?: IoRestorecommerceUserUser | null;
  shop?: IoRestorecommerceShopShop;
  numberOfItems!: number;

  ngOnInit(): void {
    this.product =
      this.order.items?.[0]?.product?.product?.physical?.variants?.[0];

    this.customer = this.order.customer?.private?.user || this.order.user;

    this.shop = this.order.shop;
    this.numberOfItems = this.order.items?.length || 0;
  }
}
