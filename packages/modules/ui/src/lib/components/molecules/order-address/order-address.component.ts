import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  IoRestorecommerceAddressBillingAddress,
  IoRestorecommerceAddressShippingAddress,
} from '@console-core/graphql';

@Component({
  selector: 'rc-order-address',
  templateUrl: './order-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderAddressComponent {
  @Input({ required: true }) title!: string;

  @Input({ required: true })
  rcOrderAddress?:
    | IoRestorecommerceAddressShippingAddress
    | IoRestorecommerceAddressBillingAddress;
}
