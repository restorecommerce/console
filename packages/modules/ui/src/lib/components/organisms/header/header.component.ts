import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
})
export class RcHeaderComponent {
  @HostBinding('class.application-header')
  @HostBinding('class.row')
  @HostBinding('class.center')
  _hostClasses = true;
}
