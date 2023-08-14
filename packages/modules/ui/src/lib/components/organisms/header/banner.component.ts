import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { APP } from '@console-core/config';

@Component({
  selector: 'rc-banner',
  templateUrl: 'banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcBannerComponent {
  APP = APP;

  @HostBinding('class.row')
  @HostBinding('class.center')
  _hostClasses = true;

  @Input()
  logoUrl?: string;

  @Input()
  logoLink?: string;
}
