import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  IoRestorecommerceOrderItem,
  IoRestorecommerceProductIndividualProductVariant,
} from '@console-core/graphql';
import { IProduct } from '@console-core/types';

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
  standalone: false,
})
export class RcOrderItemComponent implements OnInit {
  @HostBinding('class') classNames = 'order-item';

  @Input({ required: true })
  item!: IoRestorecommerceOrderItem;

  variant!: IoRestorecommerceProductIndividualProductVariant;

  @Output() openEditOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();

  @Output() openDeleteOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();

  product!: IProduct;

  ngOnInit(): void {
    this.product = this.item.product as IProduct;
    this.variant = this.product.product.physical?.variants?.find((variant) => {
      return variant.id === this.item.variantId;
    }) as IoRestorecommerceProductIndividualProductVariant;
  }
}
