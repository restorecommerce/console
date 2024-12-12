import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  IoRestorecommerceOrderOrder,
  IoRestorecommerceUserUser,
} from '@console-core/graphql';

@Component({
  selector: 'rc-order-info',
  templateUrl: './order-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcOrderInfoComponent implements OnInit {
  @Input({ required: true })
  order!: IoRestorecommerceOrderOrder;

  @Output() openEditOrderInfoModal = new EventEmitter<void>();

  customer?: IoRestorecommerceUserUser;

  ngOnInit(): void {
    this.customer =
      this.order.customer?.private?.user || this.order.user || undefined;
  }
}
