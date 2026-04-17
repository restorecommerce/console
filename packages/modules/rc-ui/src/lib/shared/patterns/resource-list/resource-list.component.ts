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
    <section class="col h-100p ">
      <vcl-data-list
        [noBorder]="true"
        class="w-100p flex scrollable"
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
                (click)="createItem.emit()"
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
            class="row justify-between mt-1 mb-2"
            role="menubar"
          >
            <vcl-input-field class="flex rc-list-input-field">
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

        @if (items.length) {
          @for (item of items; track getId(item)) {
            <vcl-data-list-item
              [value]="getId(item)"
              (click)="itemSelected.emit(item)"
            >
              <ng-container
                *ngTemplateOutlet="itemTpl; context: { $implicit: item }"
              />
            </vcl-data-list-item>
          }
        } @else {
          <div class="p-2 text-muted">
            {{ emptyLabel }}
          </div>
        }
      </vcl-data-list>
    </section>
  `,
  styles: [
    `
      .rc-list-input-field {
        border: none !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcResourceListComponent<
  TItem extends { id: RcId },
> implements OnChanges {
  @Input({ required: true }) items: TItem[] = [];
  @Input({ required: true }) getId!: (item: TItem) => RcId;

  @Input() title = 'Items';
  @Input() emptyLabel = 'No results';

  @Input() total = 0;
  @Input() filtered = 0;

  @Output() itemSelected = new EventEmitter<TItem>();
  @Output() createItem = new EventEmitter<void>();

  // Templates
  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTpl!: TemplateRef<RcResourceContext<TItem>>;

  @ContentChild('headerTemplate', { read: TemplateRef })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerTpl?: TemplateRef<any>;

  headerCtx = { total: 0, filtered: 0 } as RcResourceListHeaderCtx;

  ngOnChanges(): void {
    this.headerCtx = { total: this.total, filtered: this.filtered };
  }
}
