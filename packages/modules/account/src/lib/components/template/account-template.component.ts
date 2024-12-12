import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-template',
  template: `
    <rc-page-account>
      <router-outlet />
    </rc-page-account>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AccountTemplateComponent {}
