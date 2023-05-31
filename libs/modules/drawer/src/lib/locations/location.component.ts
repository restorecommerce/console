import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-location',
  template: `
    <div>
      <h1>Location 1</h1>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {}
