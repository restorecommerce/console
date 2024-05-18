import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-variants',
  templateUrl: './product-variants.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductVariantsComponent {
  @Input({ required: true })
  variants!: IIoRestorecommerceProductPhysicalVariant[];
}
