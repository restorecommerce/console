// popover-action.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-popover-action',
  templateUrl: './popover-action.component.html',
  standalone: false,
})
export class RcPopoverActionComponent<T extends { id: string }> {
  @Input() item!: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() target: any;
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<string>();
}
