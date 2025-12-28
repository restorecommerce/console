import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-fulfillment-view',
  template: ` <h3>View</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillmentViewComponent {}
