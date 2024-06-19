import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IFulfillment } from '@console-core/types';

@Component({
  selector: 'app-module-fulfillment-view-details',
  template: `
    <pre>
      {{ fulfillment | json }}
    </pre
    >
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillmentViewDetailsComponent {
  @Input({ required: true }) fulfillment!: IFulfillment;
}
