import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-layout-index',
  template: `
    <div>
      <p>Layout content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LayoutComponent {}
