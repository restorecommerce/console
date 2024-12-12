import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-layout',
  templateUrl: './page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageLayoutComponent {}
