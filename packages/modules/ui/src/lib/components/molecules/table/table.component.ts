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
  encapsulation: ViewEncapsulation.None, // let styles affect slotted <table>
  template: `
    <div
      class="rc-table__container"
      role="region"
      [attr.aria-label]="ariaLabel || 'Data table'"
      [style.maxHeight]="maxHeight"
      [style.overflowY]="stickyHeader ? 'auto' : 'visible'"
      [style.overflowX]="scrollX ? 'auto' : 'visible'"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      /* Container */
      .rc-table__container {
        border: 1px solid var(--rc-border, #e5e7eb);
        border-radius: 0.75rem; /* 12px */
        background: var(--rc-surface, #fff);
      }

      /* Base table styling (applied via class injection below) */
      table.rc-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 0.875rem; /* 14px */
      }

      /* Head cells */
      table.rc-table thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: var(--rc-head, #f9fafb);
        color: var(--rc-head-fg, #111827);
        text-align: left;
        font-weight: 600;
        padding: 0.625rem 0.75rem; /* 10px 12px */
        border-bottom: 1px solid var(--rc-border, #e5e7eb);
      }

      /* Body cells */
      table.rc-table tbody td {
        padding: 0.625rem 0.75rem;
        border-bottom: 1px solid var(--rc-row-border, #f3f4f6);
        vertical-align: top;
        color: var(--rc-fg, #111827);
      }

      /* Zebra stripes */
      table.rc-table.rc--striped tbody tr:nth-child(even) td {
        background: var(--rc-row-alt, #fafafa);
      }

      /* Hover rows */
      table.rc-table.rc--hover tbody tr:hover td {
        background: var(--rc-row-hover, #f5f7ff);
      }

      /* Dense mode */
      table.rc-table.rc--dense thead th,
      table.rc-table.rc--dense tbody td {
        padding-top: 0.375rem; /* 6px */
        padding-bottom: 0.375rem;
      }

      /* Rounded corners on the table top */
      table.rc-table thead th:first-child {
        border-top-left-radius: 0.75rem;
      }
      table.rc-table thead th:last-child {
        border-top-right-radius: 0.75rem;
      }

      /* Last row bottom radius (only when container isn't clipping) */
      table.rc-table tbody tr:last-child td:first-child {
        border-bottom-left-radius: 0.75rem;
      }
      table.rc-table tbody tr:last-child td:last-child {
        border-bottom-right-radius: 0.75rem;
      }

      /* Responsive: allow cells to wrap nicely */
      table.rc-table th,
      table.rc-table td {
        word-break: break-word;
      }

      /* Dark mode (optional) */
      @media (prefers-color-scheme: dark) {
        .rc-table__container {
          border-color: #1f2937;
          background: #0b0f1a;
        }
        table.rc-table thead th {
          background: #0f172a;
          color: #e5e7eb;
          border-bottom-color: #1f2937;
        }
        table.rc-table tbody td {
          color: #e5e7eb;
          border-bottom-color: #111827;
        }
        table.rc-table.rc--striped tbody tr:nth-child(even) td {
          background: #0d1324;
        }
        table.rc-table.rc--hover tbody tr:hover td {
          background: #111a33;
        }
      }
    `,
  ],
})
export class RcTableComponent implements AfterContentInit {
  /** Make header sticky & enable vertical scroll within the container */
  @Input() stickyHeader = true;
  /** Apply zebra stripes */
  @Input() striped = true;
  /** Highlight row on hover */
  @Input() hover = true;
  /** Reduce paddings */
  @Input() dense = false;
  /** Horizontal scroll for wide tables */
  @Input() scrollX = true;
  /** Max height for the scroll container (e.g., '320px', '50vh') */
  @Input() maxHeight = '320px';
  /** Optional aria label for the scroll region */
  @Input() ariaLabel?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild('table', { read: ElementRef, static: false as any })
  // ^ not reliable for projected nodes, so we'll query manually in ngAfterContentInit
  _ignored?: ElementRef;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterContentInit() {
    const table = this.host.nativeElement.querySelector('table');
    if (!table) return;

    table.classList.add('rc-table');
    this.striped && table.classList.add('rc--striped');
    this.hover && table.classList.add('rc--hover');
    this.dense && table.classList.add('rc--dense');

    // Ensure <thead> is present for stickyHeader to work safely
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
