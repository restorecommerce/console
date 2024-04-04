import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-data-list-item',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListItemComponent {
  @HostBinding('class.data-list-item')
  @HostBinding('class.col')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-label',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListLabelComponent {
  @HostBinding('class.data-list-label')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-sublabel',
  template: ` <ng-content /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListSublabelComponent {
  @HostBinding('class.data-list-sublabel')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-status',
  template: `
    <span class="secondary-k"> Status: </span>
    <span class="secondary-v"> <ng-content /></span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListStatusComponent {
  @HostBinding('class.data-list-status')
  _hostClasses = true;
}
