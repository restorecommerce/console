import { HostBinding, Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'rc-grid-cell-sidebar',
  standalone: false,
})
export class RcGridCellSidebarDirective {
  @HostBinding('class.layout-grid-cell')
  @HostBinding('class.rc-layout-grid-cell-sidebar')
  _hostClasses = true;

  // To support text overflow
  @HostBinding('style.min-width')
  styleMinWidth = 0;
}
