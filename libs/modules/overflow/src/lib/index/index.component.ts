import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-index',
  template: `
    <div>
      <h1>Overflow</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
