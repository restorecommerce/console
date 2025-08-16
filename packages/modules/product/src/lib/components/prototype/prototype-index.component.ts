import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-product-category',
  template: ` <h3>Prototypes</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeIndexComponent {}
