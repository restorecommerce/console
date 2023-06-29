import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-header-toolbar',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcHeaderToolbarComponent {
  @HostBinding('class.row')
  _hostClasses = true;
}
