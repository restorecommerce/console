import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-addresses',
  template: `
    <div>
      <h1>Addresses</h1>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressesComponent {}
