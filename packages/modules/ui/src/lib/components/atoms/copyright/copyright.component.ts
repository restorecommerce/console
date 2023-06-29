import { Component, ChangeDetectionStrategy } from '@angular/core';

import { APP, ROUTER } from '@console-core/config';
@Component({
  selector: 'rc-copyright',
  templateUrl: './copyright.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCopyrightComponent {
  APP = APP;
  ROUTER = ROUTER;
  year = new Date().getFullYear();
}
