import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-home-index',
  template: `
    <div>
      <h2>Home</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
