import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-preferences',
  template: ` <rc-page-preferences /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {}
