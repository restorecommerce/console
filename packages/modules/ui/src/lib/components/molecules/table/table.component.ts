import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'rc-table',
  standalone: false,
  encapsulation: ViewEncapsulation.None, // allow VCL styles to flow in
  template: `
    <div
      class="rc-table__container"
      role="region"
      [attr.aria-label]="ariaLabel || 'Data table'"
      [style.overflowY]="stickyHeader ? 'auto' : 'visible'"
      [style.overflowX]="scrollX ? 'auto' : 'visible'"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      /* Keep the container minimal; VCL styles the table itself */
      .rc-table__container {
        background: var(--rc-surface, transparent);
      }

      /* Optional sticky header support while using VCL classes */
      :host([stickyHeader]) table thead th,
      .rc-table__container table thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        /* inherit thead background from VCL theme */
        background: inherit;
      }
    `,
  ],
})
export class RcTableComponent implements AfterContentInit {
  /** VERTICAL SCROLL + sticky header behavior */
  @Input() stickyHeader = true;

  /** VCL class toggles (default choices align with your previous behavior) */
  @Input() noBorder = true; // -> .no-border
  @Input() fixed = true; // -> .fixed
  @Input() altRowColor = true; // -> .alt-row-color (striped)
  @Input() vAlignMiddle = true; // -> .v-align-middle
  @Input() hoverHighlight = true; // -> .row-hover-highlight
  @Input() selectable = false; // -> .row-selectability

  /** Container behavior */
  @Input() scrollX = true;

  /** ARIA roles/labels */
  @Input() ariaLabel?: string;
  /** Role to set on the <table> to match VCL example (e.g., 'listbox') */
  @Input() tableRole = 'listbox';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild('table', { read: ElementRef, static: false as any })
  _ignored?: ElementRef;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterContentInit() {
    const table = this.host.nativeElement.querySelector('table');
    if (!table) return;

    // Apply VCL base class
    table.classList.add('table');

    // Apply VCL option classes based on inputs
    this.noBorder && table.classList.add('no-border');
    this.fixed && table.classList.add('fixed');
    this.altRowColor && table.classList.add('alt-row-color');
    this.vAlignMiddle && table.classList.add('v-align-middle');
    this.hoverHighlight && table.classList.add('row-hover-highlight');
    this.selectable && table.classList.add('row-selectability');

    // Set ARIA role on the table as in the VCL example
    if (this.tableRole) {
      table.setAttribute('role', this.tableRole);
    }

    // Warn if sticky header requested without <thead>
    if (this.stickyHeader) {
      const thead = table.querySelector('thead');
      if (!thead) {
        console.warn(
          '[rc-table] stickyHeader is enabled but no <thead> found.'
        );
      }
    }
  }
}
