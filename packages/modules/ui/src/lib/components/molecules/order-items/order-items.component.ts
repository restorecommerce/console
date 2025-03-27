import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { map } from 'rxjs';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';
import { ProductFacade, ShopFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

@Component({
  selector: 'rc-order-items',
  templateUrl: './order-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcOrderItemsComponent {
  @Input({ required: true })
  items: IoRestorecommerceOrderItem[] = [];

  @Output() openAddItemModal = new EventEmitter<void>();
  @Output() openEditOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();
  @Output() openDeleteOrderItemModal =
    new EventEmitter<IoRestorecommerceOrderItem>();

  // Add missing product field to items
  orderItemsWithProduct$ = this.productFacade.entities$.pipe(
    map((entities) => {
      return this.items.map((item) => {
        const productId = item.productId as string;
        const product = entities[productId] as IProduct;

        return { ...item, product };
      });
    })
  );

  constructor(
    private readonly productFacade: ProductFacade,
    private readonly shopFacade: ShopFacade
  ) {}
}
