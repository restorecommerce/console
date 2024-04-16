import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceAddressShippingAddress } from '@console-core/graphql';

@Component({
  selector: 'rc-shipping-address',
  templateUrl: './shipping-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcShippingAddressComponent {
  @Input({ required: true })
  shippingAddress?: IoRestorecommerceAddressShippingAddress;
}
