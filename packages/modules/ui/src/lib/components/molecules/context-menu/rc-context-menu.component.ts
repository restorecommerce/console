import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
    <ng-template
      vclPopover
      #menuPopover="vclPopover"
      [target]="target"
      (afterClose)="close()"
      [positions]="positions"
    >
      <vcl-select-list
        [value]="null"
        (valueChange)="onPick($event)"
        style="min-width: 180px"
      >
        <vcl-select-list-item
          *ngFor="let it of items"
          [value]="it.value"
          [disabled]="it.disabled || false"
          [ngClass]="{ 'rc-cm--danger': it.danger }"
        >
          {{ it.label }}
        </vcl-select-list-item>
      </vcl-select-list>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .rc-cm--danger {
        color: #ef4444;
      }
    `,
  ],
})
export class RcContextMenuComponent {
  /** Menu entries */
  @Input() items: RcContextMenuItem[] = [];

  /** Popover positions (VCL overlay config) */
  @Input() positions: Array<{
    originX: 'start' | 'center' | 'end';
    originY: 'top' | 'center' | 'bottom';
    overlayX: 'start' | 'center' | 'end';
    overlayY: 'top' | 'center' | 'bottom';
  }> = [
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
  ];

  /** Emitted when a value is chosen */
  @Output() select = new EventEmitter<string>();

  /** (Optional) Emitted when the popover closes */
  @Output() closed = new EventEmitter<void>();

  @Input()
  target!: HTMLElement;

  @ViewChild('menuPopover', { static: true }) popoverRef!: {
    open: () => void;
    close: () => void;
  };

  /** Programmatic open. Pass the anchor/target element. */
  open(targetEl: HTMLElement | ElementRef): void {
    this.target =
      targetEl instanceof ElementRef ? targetEl.nativeElement : targetEl;
    this.popoverRef.open();
  }

  /** Contextmenu helper: call from (contextmenu) handler. */
  openOnContextMenu(evt: MouseEvent, anchor?: HTMLElement | ElementRef): void {
    evt.preventDefault();
    // Prefer explicit anchor; otherwise use the event target.
    const el =
      anchor ??
      (evt.currentTarget as HTMLElement) ??
      (evt.target as HTMLElement);
    this.open(el);
  }

  /** Close the popover. */
  close(): void {
    this.popoverRef?.close?.();
    this.closed.emit();
  }

  /** Handle pick + close */
  onPick(value: string): void {
    this.select.emit(value);
    this.close();
  }
}
