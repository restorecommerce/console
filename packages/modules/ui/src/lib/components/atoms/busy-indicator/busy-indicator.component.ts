import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rc-busy-indicator',
  template: `
    <div class="row justify-center">
      <vcl-busy-indicator>Loading...</vcl-busy-indicator>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcBusyIndicatorComponent {}
