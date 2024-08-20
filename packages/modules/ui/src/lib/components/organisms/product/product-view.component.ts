import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductProduct,
} from '@console-core/graphql';

@Component({
  selector: 'rc-product-view',
  template: `
    <rc-product-details [product]="product.product || {}" />
    <rc-product-variants
      [variants]="product.product?.physical?.variants || []"
      (addVariant)="addVariant.emit()"
      (editVariant)="editVariant.emit($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductViewComponent {
  @Input({ required: true }) product!: IoRestorecommerceProductProduct;
  @Output() addVariant = new EventEmitter<void>();
  @Output() editVariant =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();
}
