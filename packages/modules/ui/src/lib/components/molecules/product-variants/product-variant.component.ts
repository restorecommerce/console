import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-variant',
  templateUrl: './product-variant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcProductVariantComponent {
  @HostBinding('class') className = 'w-100p';

  @Input({ required: true })
  variant!: IIoRestorecommerceProductPhysicalVariant;

  @Output() editVariant =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteVariant = new EventEmitter<string>();
}
