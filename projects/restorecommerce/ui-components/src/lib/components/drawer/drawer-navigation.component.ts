import { Component, HostBinding, OnDestroy, ElementRef, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { NavigationStateService } from './drawer-navigation-state.service';

@Component({
  selector: 'rc-drawer-navigation',
  templateUrl: 'drawer-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NavigationStateService],
})
export class RcDrawerNavigationComponent {

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private navigationStateService: NavigationStateService,
  ) { }

  @Output()
  selectItem = new EventEmitter<any>();

  subMenuPortal?: TemplatePortal<any>;

  @HostBinding('class.rc-drawer-navigation')
  @HostBinding('class.col')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

  @HostBinding('attr.role')
  // tslint:disable-next-line:variable-name
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
