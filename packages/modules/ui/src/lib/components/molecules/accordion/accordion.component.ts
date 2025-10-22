// rc-accordion.component.ts
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  AfterContentInit,
  forwardRef,
} from '@angular/core';

import { RcAccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'rc-accordion',
  standalone: false,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'block',
    role: 'presentation',
  },
})
export class RcAccordionComponent implements AfterContentInit {
  /** If false, opening one item closes the others */
  @Input() multi = false;

  @ContentChildren(forwardRef(() => RcAccordionItemComponent))
  items!: QueryList<RcAccordionItemComponent>;

  ngAfterContentInit() {
    // Link children back to the parent for coordination
    this.items.forEach((i) => i.registerParent(this));
  }

  /** Called by children when they open */
  _notifyItemOpened(opened: RcAccordionItemComponent) {
    if (this.multi) return;
    this.items.forEach((item) => {
      if (item !== opened && item.expanded)
        item.setExpanded(false, /*emit*/ true);
    });
  }

  /** Focus management for arrow keys */
  focusNext(from: RcAccordionItemComponent) {
    const arr = this.items.toArray();
    const i = arr.indexOf(from);
    const next = arr[(i + 1) % arr.length];
    next?.focusHeader();
  }
  focusPrev(from: RcAccordionItemComponent) {
    const arr = this.items.toArray();
    const i = arr.indexOf(from);
    const prev = arr[(i - 1 + arr.length) % arr.length];
    prev?.focusHeader();
  }
  focusFirst() {
    this.items.first?.focusHeader();
  }
  focusLast() {
    this.items.last?.focusHeader();
  }
}
