import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-teams',
  template: `
    <div>
      <h2>Teams</h2>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {}
