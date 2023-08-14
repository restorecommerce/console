import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { RcDrawerService } from '../../services';

@Component({
  selector: 'rc-toggle-drawer',
  templateUrl: 'toggle-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host a {
        cursor: pointer;
      }
    `,
  ],
})
export class RcToggleDrawerComponent {
  @HostBinding('class.px-2')
  _hostClasses = true;

  constructor(public readonly drawerService: RcDrawerService) {}
}
