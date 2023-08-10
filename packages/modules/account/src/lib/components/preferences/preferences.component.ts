import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-preferences',
  template: `
    <div>
      <h2>Preferences</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {}
