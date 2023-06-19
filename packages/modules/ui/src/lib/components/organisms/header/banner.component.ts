import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rc-banner',
  templateUrl: 'banner.component.html',
})
export class RcBannerComponent {
  @HostBinding('class.row')
  @HostBinding('class.center')
  _hostClasses = true;

  @Input()
  logoUrl?: string;

  @Input()
  logoLink?: string;
}
