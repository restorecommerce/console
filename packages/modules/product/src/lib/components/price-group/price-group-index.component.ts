import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-price-groups',
  template: ` <h3>Price groups</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceGroupIndexComponent {}
