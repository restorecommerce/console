import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { IProduct } from '@console-core/types';

@Component({
  selector: 'rc-data-list-product',
  templateUrl: 'data-list-product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcDataListProductComponent {
  @HostBinding('class.data-list-product')
  _hostClasses = true;

  @Input({ required: true }) product!: IProduct;

  isError = false;

  onImageError() {
    this.isError = true;
  }
}
