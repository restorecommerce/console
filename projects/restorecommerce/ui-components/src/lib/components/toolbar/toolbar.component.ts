import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-toolbar',
  templateUrl: 'toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcToolbarComponent {
  @HostBinding('class.row')
  @HostBinding('class.justify-between')
  @HostBinding('class.center')
  @HostBinding('class.toolbar')
  @HostBinding('class.rc-toolbar')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

 }
