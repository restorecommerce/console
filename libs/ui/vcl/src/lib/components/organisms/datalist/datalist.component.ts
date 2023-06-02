import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-datalist',
  templateUrl: 'datalist.component.html',
  styles: [
    `
      .vclDataListHeader:empty {
        display: none;
      }
    `,
  ],
})
export class RcDataListComponent {
  @HostBinding('class.data-list')
  @HostBinding('class.rc-data-list')
  @HostBinding('class.scrollable')
  @HostBinding('class.item-selectability')
  @HostBinding('class.item-hover-highlight')
  @HostBinding('class.no-border')
  @HostBinding('class.y')
  _hostClasses = true;
}
