import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IOrder } from '@console-core/types';

@Component({
  selector: 'rc-order-info',
  templateUrl: './order-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcOrderInfoComponent {
  @Input({ required: true })
  order!: IOrder;

  @Output() openEditOrderInfoModal = new EventEmitter<void>();
}
