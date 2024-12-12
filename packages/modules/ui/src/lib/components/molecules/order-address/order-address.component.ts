import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  IoRestorecommerceAddressBillingAddress,
  IoRestorecommerceAddressShippingAddress,
} from '@console-core/graphql';
import { EAddressType } from '@console-core/types';

@Component({
  selector: 'rc-order-address',
  templateUrl: './order-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcOrderAddressComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) addressType!: EAddressType;

  @Input({ required: true })
  rcOrderAddress?:
    | IoRestorecommerceAddressShippingAddress
    | IoRestorecommerceAddressBillingAddress;

  @Output() openAddressModal = new EventEmitter<EAddressType>();
}
