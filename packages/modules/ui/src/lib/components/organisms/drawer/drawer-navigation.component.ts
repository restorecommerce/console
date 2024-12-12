import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  HostBinding,
  ElementRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import { NavigationStateService } from './drawer-navigation-state.service';

@Component({
  selector: 'rc-drawer-navigation',
  templateUrl: 'drawer-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NavigationStateService],
  standalone: false,
})
export class RcDrawerNavigationComponent {
  constructor(
    readonly elementRef: ElementRef<HTMLElement>,
    private readonly navigationStateService: NavigationStateService
  ) {}

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectItem = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subMenuPortal?: TemplatePortal<any>;

  @HostBinding('class.rc-drawer-navigation')
  @HostBinding('class.col')
  _hostClasses = true;

  @HostBinding('attr.role')
  _attrRole = 'navigation';

  get height() {
    return this.elementRef.nativeElement.offsetHeight + 'px';
  }

  onSidebarMouseLeave() {
    this.navigationStateService.leaveNav();
  }

  onSidebarMouseEnter() {
    this.navigationStateService.enterNav();
  }
}
