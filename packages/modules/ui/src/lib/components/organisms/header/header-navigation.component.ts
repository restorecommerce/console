import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rc-header-navigation',
  exportAs: 'rcHeaderNavigation',
  templateUrl: './header-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcHeaderNavigationComponent {
  @HostBinding('class.navigation')
  _hostClasses = true;
}
