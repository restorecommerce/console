import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-header-toolbar',
  template: '<ng-content></ng-content>',
})
export class RcHeaderToolbarComponent {
  @HostBinding('class.row')
  _hostClasses = true;
}
