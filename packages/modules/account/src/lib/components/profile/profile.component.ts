import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-profile',
  template: `
    <div>
      <h2>Profile</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
