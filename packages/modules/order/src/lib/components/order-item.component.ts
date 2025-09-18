import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { map } from 'rxjs';

import { API } from '@console-core/config';
import { IoRestorecommerceShopShop } from '@console-core/graphql';
import { ProductFacade, ShopFacade } from '@console-core/state';
import { IAddressContact, IOrder } from '@console-core/types';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-module-order-data-item',
  templateUrl: './order-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderItemComponent implements OnInit {
  @HostBinding('class.data-list-order')
  _hostClasses = true;

  @Input({ required: true }) order!: IOrder;

  dayjs = dayjs;

  BUCKET_DOMAIN = API.domains.bucketDomain + '/storage';

  customer!: IAddressContact;
  shop?: IoRestorecommerceShopShop;
  numberOfItems!: number;

  shop$ = this.shopFacade.entities$.pipe(
    map((shopEntities) => shopEntities[this.order.shopId as string])
  );

  constructor(
    private readonly productFacade: ProductFacade,
    // private readonly customerFacade: ShopFacade,
    private readonly shopFacade: ShopFacade
  ) {}

  ngOnInit(): void {
    this.customer = this.order.shippingAddress.contact;

    // this.shop = this.order.shop;
    this.numberOfItems = this.order.items?.length || 0;
  }
}
