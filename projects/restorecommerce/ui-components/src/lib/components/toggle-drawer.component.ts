import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ContentChildren, QueryList, HostBinding } from '@angular/core';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'rc-toggle-drawer',
  templateUrl: 'toggle-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host a {
      cursor: pointer;
    }

  `]
})
export class RcToggleDrawerComponent {
  @HostBinding('class.px-2')
  _hostClasses = true;

  constructor(public drawerService: DrawerService) { }
}
