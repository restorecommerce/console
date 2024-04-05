import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IOrder } from '@console-core/types';

@Component({
  selector: 'rc-order-view',
  templateUrl: './order-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderViewComponent {
  @Input({ required: true }) order!: IOrder;
}
