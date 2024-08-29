import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import { IoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';
import { IProduct } from '@console-core/types';

@Component({
  selector: 'rc-order-item-form',
  templateUrl: './order-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemFormComponent {
  selectedProduct = '';
  selectedVariant = '';
  variants: IoRestorecommerceProductPhysicalVariant[] = [];

  constructor(private layer: ComponentLayerRef) {}

  get products(): IProduct[] {
    return this.layer.data.products;
  }

  onSelectProduct(id: string) {
    this.selectedProduct = id;
    this.selectedVariant = '';
    this.variants =
      this.products.find((p) => p.id === id)?.product.physical?.variants || [];
  }

  onAction(_: string): void {
    // TODO
  }

  onSubmit(): void {
    // TODO
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
