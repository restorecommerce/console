import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

import { IOrder } from '@console-core/types';

dayjs.extend(relativeTime);

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
  selector: 'rc-data-list-order',
  template: `
    <div class="row">
      <div>
        <img
          class="responsive-image"
          src="https://picsum.photos/60/60"
          width="60px"
          height="60px"
        />
      </div>
      <div class="flex">
        <div class="row gutter-margin">
          <div class="flex">
            <p class="m-0">Thomas Hope</p>
            <p>Company With Very Long Name Inc.</p>
          </div>
          <div class="align-right secondary-text-color">
            <p
              class="m-0 badge"
              [ngClass]="
                'badge-' + order.orderState.replace('_', '-').toLowerCase()
              "
            >
              {{ order.orderState.replace('_', ' ') }}
            </p>
            <p class="created">
              {{ dayjs(this.order.meta.created).fromNow() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListOrderComponent {
  @HostBinding('class.data-list-order')
  _hostClasses = true;

  @Input({ required: true }) order!: IOrder;

  dayjs = dayjs;
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
    <span class="secondary-v"> [{{ value }}]</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcDataListKeyValueComponent {
  @HostBinding('class.data-list-key-value')
  _hostClasses = true;

  @Input({ required: true }) key!: string;
  @Input({ required: true }) value!: string;
}
