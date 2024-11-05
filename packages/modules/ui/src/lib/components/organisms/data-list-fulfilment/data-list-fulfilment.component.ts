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
})
export class RcDataListFulfilmentComponent {
  @HostBinding('class') klass = 'col';
  @Input({ required: true }) fulfillment!: IFulfillment;
}
