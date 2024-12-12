import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-index',
  template: `
    <div>
      <p>Overflow content</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OverflowComponent {}
