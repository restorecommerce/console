import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-account',
  templateUrl: './page-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageAccountComponent {}
