import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceProductProduct } from '@console-core/graphql';

@Component({
  selector: 'rc-product-view',
  template: `
    <rc-product-details [product]="product.product || {}" />
    <rc-product-variants
      [variants]="product.product?.physical?.variants || []"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductViewComponent {
  @Input({ required: true }) product!: IoRestorecommerceProductProduct;
}
