import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-layout-index',
  template: `
    <div>
      <h1>Layout</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
