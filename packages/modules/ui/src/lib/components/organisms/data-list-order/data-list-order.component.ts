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
import {
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceShopShop,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';
import { ProductFacade, ShopFacade } from '@console-core/state';
import { IOrder, IProduct } from '@console-core/types';

dayjs.extend(relativeTime);

@Component({
  selector: 'rc-data-list-order',
  templateUrl: './data-list-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcDataListOrderComponent implements OnInit {
  @HostBinding('class.data-list-order')
  _hostClasses = true;

  @Input({ required: true }) order!: IOrder;

  dayjs = dayjs;

  BUCKET_DOMAIN = API.domains.bucketDomain;

  product?: IoRestorecommerceProductPhysicalVariant | null;
  customer?: IoRestorecommerceUserUser | null;
  shop?: IoRestorecommerceShopShop;
  numberOfItems!: number;

  product$ = this.productFacade.entities$.pipe(
    map((entities) => {
      const productId = this.order.items?.[0].productId as string;
      const product = entities[productId] as IProduct;

      return product;
    })
  );

  productVariantImage$ = this.product$.pipe(
    map((product) => {
      const variantId = this.order.items?.[0].variantId as string;

      const variant = product?.product.physical?.variants?.find(
        (variant) => variant.id === variantId
      );

      const templateVariant = product.product.physical?.templates?.find(
        (tmpl) => tmpl.id === variant?.parentVariantId
      );

      return templateVariant &&
        templateVariant.images &&
        templateVariant.images.length > 0
        ? [...(variant?.images || []), ...templateVariant.images]
        : [...(variant?.images || [])];
    })
  );

  shop$ = this.shopFacade.entities$.pipe(
    map((shopEntities) => shopEntities[this.order.shopId as string])
  );

  constructor(
    private readonly productFacade: ProductFacade,
    // private readonly customerFacade: ShopFacade,
    private readonly shopFacade: ShopFacade
  ) {}

  ngOnInit(): void {
    // This assumes that the customer is always private,
    // We have to account for commercial customer too...
    this.customer = this.order.customer?.private?.user || this.order.user;

    // this.shop = this.order.shop;
    this.numberOfItems = this.order.items?.length || 0;
  }
}
