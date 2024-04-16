import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IoRestorecommerceAmountAmount } from '@console-core/graphql';

@Component({
  selector: 'rc-order-totals',
  templateUrl: './order-totals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderTotalsComponent {
  @Input({ required: true })
  totalAmounts?: IoRestorecommerceAmountAmount[];
}
