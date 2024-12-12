import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-overflow',
  templateUrl: './page-overflow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageOverflowComponent {}
