import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-order',
  templateUrl: './page-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageOrderComponent {}
