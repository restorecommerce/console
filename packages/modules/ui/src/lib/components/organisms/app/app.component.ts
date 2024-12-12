import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP, ROUTER } from '@console-core/config';

import { RcDrawerService } from '../../../services';

@Component({
  selector: 'rc-app',
  templateUrl: './app.component.html',
  standalone: false,
})
export class RcAppComponent {
  APP = APP;
  ROUTER = ROUTER;

  opened$: Observable<boolean> = this.drawerService.opened$.pipe(
    map((opened) => Boolean(opened))
  );

  constructor(public readonly drawerService: RcDrawerService) {}

  @HostBinding('class.app')
  @HostBinding('class.col')
  _hostClasses = true;
}
