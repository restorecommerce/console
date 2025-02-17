import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-shop-index',
  template: ` <h3>Shopx</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopIndexComponent {}
