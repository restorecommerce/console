import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-product',
  template: ` <h3>Manufacturers</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ManufacturerIndexComponent {}
