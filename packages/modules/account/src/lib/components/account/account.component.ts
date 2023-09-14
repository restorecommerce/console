import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account',
  template: ` <rc-page-account /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {}
