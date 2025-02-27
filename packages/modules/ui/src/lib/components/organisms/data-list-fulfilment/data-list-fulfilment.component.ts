import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { IFulfillment } from '@console-core/types';

@Component({
  selector: 'rc-data-list-fulfilment',
  templateUrl: './data-list-fulfilment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcDataListFulfilmentComponent {
  @HostBinding('class') klass =
    'flex row justify-content-between align-items-center';
  @Input({ required: true }) fulfillment!: IFulfillment;
}
