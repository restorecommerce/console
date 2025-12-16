import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

export interface RcContextMenuItem {
  value: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
}

@Component({
  selector: 'rc-context-menu',
  template: `
    <vcl-select-list (valueChange)="onPick($event)">
      @for (it of items; track $index) {
      <vcl-select-list-item
        [value]="it.value"
        [disabled]="it.disabled || false"
      >
        {{ it.label }}
      </vcl-select-list-item>
      }
    </vcl-select-list>
  `,
  imports: [VCLSelectListComponent, VCLSelectListItemComponent],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class RcContextMenuComponent {
  @Input() items: RcContextMenuItem[] = [];

  /** Emitted when a value is chosen */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter<string>();

  /** Handle pick + close */
  onPick(value: string): void {
    this.select.emit(value);
  }
}
