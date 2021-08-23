import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rc-banner',
  templateUrl: 'banner.component.html'
})
export class RcBannerComponent {

  @HostBinding('class.row')
  @HostBinding('class.center')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

  @Input()
  logoUrl?: string;

  @Input()
  logoLink?: string;

}
