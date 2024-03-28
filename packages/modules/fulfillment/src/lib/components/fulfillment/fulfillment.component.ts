import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-fulfillment-index',
  template: `
    <div>
      <p>Fulfillment content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillmentComponent {}
