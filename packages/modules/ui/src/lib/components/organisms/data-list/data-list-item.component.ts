import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-data-list-item',
  templateUrl: 'data-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListItemComponent {
  @HostBinding('class.data-list-item')
  @HostBinding('class.col')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-label',
  templateUrl: 'data-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListLabelComponent {
  @HostBinding('class.rc-data-list-label')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-sublabel',
  templateUrl: 'data-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListSublabelComponent {
  @HostBinding('class.rc-data-list-sublabel')
  _hostClasses = true;
}
