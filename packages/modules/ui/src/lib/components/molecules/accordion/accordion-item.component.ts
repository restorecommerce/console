import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { RcAccordionComponent } from './accordion.component';

let nextId = 0;

@Component({
  selector: 'rc-accordion-item',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="border border-gray-200 rounded-xl mb-3 overflow-hidden bg-white"
    >
      <h3 class="m-0">
        <button
          type="button"
          class="w-100p rc-acc-btn w-full row items-center justify-between gap-3 px-4 py-3 text-left"
          [attr.aria-expanded]="expanded"
          [attr.aria-controls]="panelId"
          [id]="headerId"
          (click)="toggle()"
          (keydown)="onKeydown($event)"
          [disabled]="disabled"
        >
          <span class="font-medium">{{ title }}</span>
          <span
            class="shrink-0 transition-transform"
            [ngClass]="{ 'rotate-90': expanded }"
          >
            ▸
          </span>
        </button>
      </h3>

      <div
        [id]="panelId"
        role="region"
        class="px-4 pt-0 pb-4"
        [attr.aria-labelledby]="headerId"
        [hidden]="!expanded"
      >
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./accordion-item.component.scss'],
})
export class RcAccordionItemComponent {
  @Input() title = '';
  @Input() disabled = false;

  /** Controlled or uncontrolled: supports two-way binding [(expanded)] */
  @Input() expanded = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  headerId = `rc-acc-header-${++nextId}`;
  panelId = `rc-acc-panel-${nextId}`;

  private _parent?: RcAccordionComponent;

  constructor(private el: ElementRef<HTMLElement>) {}

  registerParent(parent: RcAccordionComponent) {
    this._parent = parent;
  }

  focusHeader() {
    const btn = this.el.nativeElement.querySelector('button');
    (btn as HTMLButtonElement | null)?.focus();
  }

  setExpanded(v: boolean, emit = true) {
    if (this.disabled) return;
    this.expanded = v;
    if (emit) this.expandedChange.emit(this.expanded);
  }

  toggle() {
    const willOpen = !this.expanded;
    this.setExpanded(willOpen);
    if (willOpen) this._parent?._notifyItemOpened(this);
  }

  onKeydown(e: KeyboardEvent) {
    // a11y keyboard patterns: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._parent?.focusNext(this);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._parent?.focusPrev(this);
        break;
      case 'Home':
        e.preventDefault();
        this._parent?.focusFirst();
        break;
      case 'End':
        e.preventDefault();
        this._parent?.focusLast();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.toggle();
        break;
    }
  }
}
