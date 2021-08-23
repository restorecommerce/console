import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-header-toolbar',
  template: '<ng-content></ng-content>'
})
export class RcHeaderToolbarComponent {
  @HostBinding('class.row')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;
}
