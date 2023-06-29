import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-home',
  templateUrl: './page-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageHomeComponent {}
