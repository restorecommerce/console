import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-variant',
  templateUrl: './product-variant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductVariantComponent {
  @Input({ required: true })
  variant!: IIoRestorecommerceProductPhysicalVariant;
}
