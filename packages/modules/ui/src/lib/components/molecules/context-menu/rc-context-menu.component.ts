import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface RcContextMenuItem {
  value: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
}

@Component({
  selector: 'rc-context-menu',
  standalone: false,
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
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class RcContextMenuComponent {
  /** Menu entries */
  @Input() items: RcContextMenuItem[] = [];

  /** Emitted when a value is chosen */
  @Output() select = new EventEmitter<string>();

  /** Handle pick + close */
  onPick(value: string): void {
    this.select.emit(value);
  }
}
