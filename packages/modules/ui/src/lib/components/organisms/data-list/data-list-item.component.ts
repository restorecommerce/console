import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

@Component({
  selector: 'rc-data-list-label',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcDataListLabelComponent {
  @HostBinding('class.data-list-label')
  _hostClasses = true;
}

@Component({
  selector: 'rc-data-list-sublabel',
  template: ` <ng-content /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class RcDataListKeyValueWithBracketsComponent {
  @HostBinding('class.data-list-key-value')
  _hostClasses = true;

  @Input({ required: true }) key!: string;
  @Input({ required: true }) value!: string;
}
