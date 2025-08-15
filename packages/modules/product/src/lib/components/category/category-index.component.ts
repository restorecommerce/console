import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-category',
  template: ` <h3>Categories</h3> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryIndexComponent {}
