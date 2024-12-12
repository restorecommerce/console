import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'rc-row, [rcRow]',
  standalone: false,
})
export class RcRowDirective {
  @HostBinding('class.row')
  @HostBinding('class.grid-gutterx-2')
  _hostClasses = true;
}
