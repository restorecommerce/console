import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-countries',
  template: `
    <div>
      <h1>Countries</h1>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent {}
