import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  TemplateRef,
} from '@angular/core';

import {
  VCLButtonComponent,
  VCLDataListModule,
  VCLIconModule,
  VCLInputModule,
} from '@vcl/ng-vcl';

import { RcId, RcResourceListHeaderCtx } from './resource-list.models';

export interface RcResourceContext<T> {
  $implicit: T;
  // index: number;
  // add other properties you provide, like 'count' or 'selected'
}

@Component({
  selector: 'rc-resource-list',
  imports: [
    CommonModule,
    VCLDataListModule,
    VCLButtonComponent,
    VCLInputModule,
    VCLIconModule,
  ],
  template: `
    <vcl-data-list
      [noBorder]="true"
      class="w-100p h-100p"
    >
      <vcl-data-list-header>
        <div
          class="toolbar row just align-items-center px-2"
          role="menubar"
        >
          <div class="flex"></div>
          <span class="flex row justify-content-center overflow-ellipsis">
            {{ title }}
          </span>
          <div class="flex row justify-content-end">
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
              title="Add"
            >
              <vcl-icon icon="mdi mdi-plus"></vcl-icon>
            </button>

            <button
              vclAppend
              vcl-button
              square
              class="transparent"
              title="Refresh"
            >
              <vcl-icon icon="mdi mdi-refresh"></vcl-icon>
            </button>
          </div>
        </div>

        <div
          class="toolbar row justify-between px-2 mt-1 mb-2"
          role="menubar"
        >
          <vcl-input-field class="flex">
            <input
              placeholder="Search..."
              vclInput
            />
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
            >
              <vcl-icon icon="mdi mdi-magnify"></vcl-icon>
            </button>
          </vcl-input-field>

          <button
            vcl-button
            square
            class="transparent"
            title="Open filter"
          >
            <vcl-icon icon="mdi mdi-filter"></vcl-icon>
          </button>
        </div>
      </vcl-data-list-header>

      @if (items.length) { @for (item of items; track getId(item)) {
      <vcl-data-list-item
        [value]="getId(item)"
        (click)="itemSelected.emit(item)"
      >
        <ng-container
          *ngTemplateOutlet="itemTpl; context: { $implicit: item }"
        />
      </vcl-data-list-item>
      } } @else {
      <div class="p-2 text-muted">
        {{ emptyLabel }}
      </div>
      }
    </vcl-data-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcResourceListComponent<TItem extends { id: RcId }>
  implements OnChanges
{
  @Input({ required: true }) items: TItem[] = [];
  @Input({ required: true }) getId!: (item: TItem) => RcId;

  @Input() title = 'Items';
  @Input() emptyLabel = 'No results';

  @Input() total = 0;
  @Input() filtered = 0;

  @Output() itemSelected = new EventEmitter<TItem>();

  // Templates
  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTpl!: TemplateRef<RcResourceContext<TItem>>;

  @ContentChild('headerTemplate', { read: TemplateRef })
  headerTpl?: TemplateRef<any>;

  headerCtx = { total: 0, filtered: 0 } as RcResourceListHeaderCtx;

  ngOnChanges(): void {
    this.headerCtx = { total: this.total, filtered: this.filtered };
  }
}
