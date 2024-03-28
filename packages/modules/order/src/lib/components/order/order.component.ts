import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-order-index',
  template: `
    <div>
      <p>Order content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {}
