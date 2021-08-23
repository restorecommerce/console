// tslint:disable:variable-name

import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rc-header-navigation-item',
  templateUrl: './header-navigation-item.component.html',
  exportAs: 'rcHeaderNavigationItem',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcHeaderNavigationItemComponent {

  @HostBinding('class.navigation-item')
  _hostClasses = true;

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @HostBinding('class.selected')
  @Input()
  selected = false;

  @Input()
  icon?: string;
}
