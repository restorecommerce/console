import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-index',
  template: `
    <div>
      <h2>Overflow</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
