import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-product',
  template: `
    <div>
      <p>Product</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductComponent {}
