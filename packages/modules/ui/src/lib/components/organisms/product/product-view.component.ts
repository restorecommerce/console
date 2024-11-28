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
    <rc-product-templates
      [templates]="product.product?.physical?.templates || []"
      (addTemplate)="addTemplate.emit()"
      (editTemplate)="editTemplate.emit($event)"
      (deleteTemplate)="deleteTemplate.emit($event)"
    />
    <rc-product-variants
      [variants]="product.product?.physical?.variants || []"
      (addVariant)="addVariant.emit()"
      (editVariant)="editVariant.emit($event)"
      (deleteVariant)="deleteVariant.emit($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductViewComponent {
  @Input({ required: true }) product!: IoRestorecommerceProductProduct;
  @Output() addVariant = new EventEmitter<void>();
  @Output() editVariant =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();
  @Output() deleteVariant = new EventEmitter<string>();

  @Output() addTemplate = new EventEmitter<void>();
  @Output() editTemplate =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();
  @Output() deleteTemplate = new EventEmitter<string>();
}
