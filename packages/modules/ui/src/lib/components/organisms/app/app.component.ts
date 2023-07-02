import { Component, HostBinding } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DrawerService } from '../../../services/drawer.service';

@Component({
  selector: 'rc-app',
  templateUrl: './app.component.html',
})
export class RcAppComponent {
  mode$: Observable<'side' | 'over'> = this.drawerService.mode$.pipe(
    map((mode) => (mode === 'side' ? 'side' : 'over'))
  );
  opened$: Observable<boolean> = this.drawerService.opened$.pipe(
    map((opened) => Boolean(opened))
  );

  constructor(public readonly drawerService: DrawerService) {}

  @HostBinding('class.app')
  @HostBinding('class.col')
  _hostClasses = true;
}
