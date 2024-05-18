import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceProductProduct } from '@console-core/graphql';

@Component({
  selector: 'rc-product-view',
  templateUrl: './product-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductViewComponent {
  @Input({ required: true }) product!: IoRestorecommerceProductProduct;
}
