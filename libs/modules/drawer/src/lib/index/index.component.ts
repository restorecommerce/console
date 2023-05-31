import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-index',
  template: `
    <div>
      <h1>Drawer</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {}
