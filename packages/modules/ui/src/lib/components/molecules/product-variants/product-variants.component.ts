import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-variants',
  templateUrl: './product-variants.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductVariantsComponent {
  @Input({ required: true })
  variants!: IIoRestorecommerceProductPhysicalVariant[];
  @Output() addVariant = new EventEmitter<void>();

  @Output() editVariant =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteVariant = new EventEmitter<string>();

  get variantsWithoutBaseVariant() {
    return this.variants.slice(1);
  }

  get actualVariantLength() {
    return this.variants.length - 1;
  }
}
