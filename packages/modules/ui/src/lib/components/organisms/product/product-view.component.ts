import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IProduct } from '@console-core/types';

@Component({
  selector: 'rc-product-view',
  templateUrl: './product-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductViewComponent {
  @Input({ required: true }) product!: IProduct;
}
