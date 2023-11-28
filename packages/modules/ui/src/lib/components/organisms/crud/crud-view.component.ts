import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { IMeta } from '@console-core/types';

@Component({
  selector: 'rc-crud-view',
  template: `
    <div class="lex-8-lg flex-8-md flex-12">
      <div class="row grid-gutterx-2">
        <div class="flex-8-lg flex-12-md flex-12-sm flex-12">
          <rc-toolbar *ngIf="title">
            <button
              vcl-button
              rcPrepend
              [routerLink]=""
              class="square half-transparent button"
              title="View &quot;{{ title }}&quot;"
            >
              <vcl-icon icon="mdi:arrow-left" />
            </button>
            <button
              vcl-button
              rcPrepend
              [routerLink]=""
              class="square half-transparent button"
              title="Edit"
            >
              <vcl-icon icon="mdi:pencil" />
            </button>

            {{ title }}

            <button
              vcl-button
              rcAppend
              (click)="onDelete()"
              class="square half-transparent button"
              title="Delete"
            >
              <vcl-icon icon="mdi:delete" />
            </button>
          </rc-toolbar>

          <div class="row">
            <div class="flex py-2">
              <ng-content />
            </div>
          </div>
        </div>

        <div
          *ngIf="id"
          class="flex-4-lg flex-12-md flex-12-sm flex-12"
        >
          <rc-toolbar> Meta </rc-toolbar>
          <div class="row">
            <div class="flex py-2">
              <rc-meta
                [id]="id"
                [meta]="meta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcCrudViewComponent {
  @Input() title = '';
  @Input() id!: string;
  @Input() meta!: IMeta;

  @HostBinding('class.flex')
  _hostClasses = true;

  onDelete() {
    console.log('onDelete', this.id);
  }
}
