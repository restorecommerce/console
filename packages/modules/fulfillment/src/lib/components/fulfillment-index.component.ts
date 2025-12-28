import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-fulfillment',
  template: ` <h3>Fulfillments</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentIndexComponent {}
