import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/// TODO Remove this bullshit. Replace with ng-vcl.
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
  selector: 'rc-data-list-key-value',
  template: `
    <span class="secondary-k"> {{ key }}: </span>
    <span class="secondary-v"> {{ value }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListKeyValueComponent {
  @HostBinding('class.data-list-key-value')
  _hostClasses = true;

  @Input({ required: true }) key!: string;
  @Input({ required: true }) value!: string;
}

@Component({
  selector: 'rc-data-list-key-value-with-brackets',
  template: `
    <span class="secondary-k"> {{ key }}: </span>
    <span class="secondary-v"> [{{ value }}]</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListKeyValueWithBracketsComponent {
  @HostBinding('class.data-list-key-value')
  _hostClasses = true;

  @Input({ required: true }) key!: string;
  @Input({ required: true }) value!: string;
}
