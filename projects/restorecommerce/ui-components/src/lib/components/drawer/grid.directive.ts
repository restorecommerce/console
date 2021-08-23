import { HostBinding, Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'rc-grid-cell-sidebar',
})
export class RcGridCellSidebarDirective {
  @HostBinding('class.layout-grid-cell')
  @HostBinding('class.rc-layout-grid-cell-sidebar')
  // tslint:disable-next-line:variable-name
  _hostClasses = true;

  // To support text overflow
  @HostBinding('style.min-width')
  styleMinWidth = 0;

}
