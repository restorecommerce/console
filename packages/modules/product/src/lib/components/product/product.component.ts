import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-product-index',
  template: `
    <div>
      <p>Product content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {}
