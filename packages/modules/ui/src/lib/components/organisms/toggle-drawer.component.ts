import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { map } from 'rxjs';

import { RcDrawerService } from '../../services';

@Component({
  selector: 'rc-toggle-drawer',
  templateUrl: 'toggle-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcToggleDrawerComponent {
  @HostBinding('class.px-2')
  _hostClasses = true;

  opened$ = this.drawerService.opened$.pipe(map((status) => Boolean(status)));

  constructor(public readonly drawerService: RcDrawerService) {}
}
