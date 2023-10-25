import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-index',
  template: `
    <div>
      <p>Overflow</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverflowComponent {}
