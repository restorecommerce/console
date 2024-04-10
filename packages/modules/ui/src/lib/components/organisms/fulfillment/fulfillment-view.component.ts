import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IFulfillment } from '@console-core/types';

@Component({
  selector: 'rc-fulfillment-view',
  templateUrl: './fulfillment-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcFulfillmentViewComponent {
  @Input({ required: true }) fulfillment!: IFulfillment;
}
