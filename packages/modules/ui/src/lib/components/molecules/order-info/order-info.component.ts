import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {
  IoRestorecommerceOrderOrder,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';

@Component({
  selector: 'rc-order-info',
  templateUrl: './order-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderInfoComponent implements OnInit {
  @Input({ required: true })
  order!: IoRestorecommerceOrderOrder;

  customer?: IoRestorecommerceUserUser;

  ngOnInit(): void {
    this.customer =
      this.order.customer?.private?.user || this.order.user || undefined;
  }
}
