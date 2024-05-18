import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceProductIndividualProduct } from '@console-core/graphql';

@Component({
  selector: 'rc-product-details',
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductDetailsComponent {
  @Input({ required: true })
  product!: IoRestorecommerceProductIndividualProduct;
}
