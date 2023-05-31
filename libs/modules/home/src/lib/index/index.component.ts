import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-home-index',
  template: `
    <div>
      <h1>Home</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
