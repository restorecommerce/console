import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';

import { RcDrawerService } from '../../services';

@Component({
  selector: 'rc-toggle-drawer',
  templateUrl: 'toggle-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcToggleDrawerComponent {
  opened$ = this.drawerService.opened$.pipe(map((status) => Boolean(status)));

  constructor(public readonly drawerService: RcDrawerService) {}
}
