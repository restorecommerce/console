import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'rc-row, [rcRow]',
})
export class RcRowDirective {
  @HostBinding('class.row')
  @HostBinding('class.grid-gutterx-3')
  @HostBinding('class.px-3')
  _hostClasses = true;
}
