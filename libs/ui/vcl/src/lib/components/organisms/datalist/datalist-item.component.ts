import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-datalist-item',
  templateUrl: 'datalist-item.component.html',
})
export class RcDataListItemComponent {
  @HostBinding('class.data-list-item')
  @HostBinding('class.col')
  _hostClasses = true;
}

@Component({
  selector: 'rc-datalist-label',
  templateUrl: 'datalist-item.component.html',
})
export class RcDataListLabelComponent {
  @HostBinding('class.rc-data-list-label')
  _hostClasses = true;
}

@Component({
  selector: 'rc-datalist-sublabel',
  templateUrl: 'datalist-item.component.html',
})
export class RcDataListSublabelComponent {
  @HostBinding('class.rc-data-list-sublabel')
  _hostClasses = true;
}
