import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-product-template',
  template: `
    <div class="row grid-gutterx-2">
      <div class="flex">
        <router-outlet />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductTemplateComponent {}
