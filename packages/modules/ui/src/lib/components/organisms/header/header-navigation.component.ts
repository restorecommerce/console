import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rc-header-navigation',
  exportAs: 'rcHeaderNavigation',
  templateUrl: './header-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcHeaderNavigationComponent {
  @HostBinding('class.navigation')
  _hostClasses = true;
}
