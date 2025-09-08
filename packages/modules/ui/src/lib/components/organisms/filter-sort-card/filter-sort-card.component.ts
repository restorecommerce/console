// filter-sort-card.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  BackendFilter,
  FieldConfig,
  FilterRow,
  FilterSortState,
  ResourceSchema,
  SortKey,
} from '@console-core/types';

@Component({
  selector: 'rc-filter-sort-card',
  templateUrl: './filter-sort-card.component.html',
  styleUrls: ['./filter-sort-card.component.css'],
  standalone: false,
})
export class FilterSortCardComponent implements OnInit {
  @Input() schema!: ResourceSchema;
  @Input() initial?: Partial<FilterSortState>;
  @Output() apply = new EventEmitter<
    FilterSortState & { filtersMapped: BackendFilter }
  >();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() reset = new EventEmitter<void>();

  q: string | null = null;
  blockOperator: 'and' | 'or' = 'and';
  rows: FilterRow[] = [];
  sort: { by: string | null; dir: 'asc' | 'desc' } = { by: null, dir: 'desc' };

  get fields(): FieldConfig[] {
    return this.schema.fields;
  }
  get sortKeys(): SortKey[] {
    return this.schema.sortKeys;
  }

  ngOnInit(): void {
    const s = this.initial ?? {};
    this.q = s.q ?? null;
    this.blockOperator = (s.blockOperator as any) ?? 'and';
    this.sort = {
      by:
        s.sort?.by ??
        this.schema.defaults?.sort?.by ??
        this.sortKeys[0]?.key ??
        null,
      dir: (s.sort?.dir as any) ?? this.schema.defaults?.sort?.dir ?? 'desc',
    };
    this.rows = s.rows?.length
      ? JSON.parse(JSON.stringify(s.rows))
      : [{ fieldPath: null, op: null, value: null }];
  }

  addRow() {
    this.rows.push({ fieldPath: null, op: null, value: null });
  }
  removeRow(i: number) {
    this.rows.splice(i, 1);
    if (this.rows.length === 0) this.addRow();
  }

  clearAll() {
    this.q = null;
    this.blockOperator = 'and';
    this.rows = [{ fieldPath: null, op: null, value: null }];
    this.sort = {
      by: this.schema.defaults?.sort?.by ?? this.sortKeys[0]?.key ?? null,
      dir: this.schema.defaults?.sort?.dir ?? 'desc',
    };
    this.reset.emit();
  }

  submit() {
    const state: FilterSortState = {
      q: this.q,
      rows: this.rows,
      blockOperator: this.blockOperator,
      sort: this.sort,
    };
    const filtersMapped = this.mapToBackendFilters(state);
    this.apply.emit({ ...state, filtersMapped });
  }

  // ========== Mapping ==========
  private mapToBackendFilters(v: FilterSortState): BackendFilter {
    const blocks: any[] = [];

    // quick search OR block
    const q = (v.q ?? '').trim();
    if (q && this.schema.quickSearchPaths?.length) {
      blocks.push({
        operator: 'or',
        filters: this.schema.quickSearchPaths.map((p) => ({
          field: this.mapField(p),
          operation: 'contains',
          value: q,
        })),
      });
    }

    // user rows combined with blockOperator
    const flatFilters: any[] = [];
    for (const r of v.rows) {
      if (!r.fieldPath || !r.op) continue;
      const f = this.rowToFilter(r);
      if (Array.isArray(f)) {
        // merge nested AND block from 'between'
        blocks.push({ operator: 'and', filters: f });
      } else if (f.operator && f.filters) {
        blocks.push(f);
      } else {
        flatFilters.push(f);
      }
    }
    if (flatFilters.length) {
      blocks.push({ operator: v.blockOperator, filters: flatFilters });
    }

    return { input: { filters: blocks } };
  }

  private rowToFilter(r: FilterRow): any {
    const field = this.mapField(r.fieldPath!);
    const op = r.op!;
    let value = r.value;

    if (op === 'between') {
      const vmin = value?.min ?? value?.from ?? null;
      const vmax = value?.max ?? value?.to ?? null;
      const out: any[] = [];
      if (vmin != null)
        out.push({
          field,
          operation: 'gte',
          value: this.castValue(field, vmin),
        });
      if (vmax != null)
        out.push({
          field,
          operation: 'lte',
          value: this.castValue(field, vmax),
        });
      return out; // will be wrapped as AND by caller
    }
    if (op === 'isTrue' || op === 'isFalse') {
      return { field, operation: 'eq', value: op === 'isTrue' };
    }
    if (op === 'isNull' || op === 'notNull') {
      return { field, operation: op === 'isNull' ? 'eq' : 'neq', value: null };
    }
    if (op === 'in') {
      const arr = Array.isArray(value)
        ? value
        : typeof value === 'string'
        ? value
            .split(',')
            .map((s: string) => s.trim())
            .filter(Boolean)
        : value == null
        ? []
        : [value];
      return {
        field,
        operation: 'in',
        value: arr.map((v) => this.castValue(field, v)),
      };
    }
    return { field, operation: op, value: this.castValue(field, value) };
  }

  private mapField(path: string): string {
    return this.schema.mapField?.(path) ?? path;
  }

  private castValue(fieldPath: string, v: any): any {
    const cfg = this.fields.find((f) => f.path === fieldPath);
    if (!cfg) return v;
    if (cfg.mapValue) return cfg.mapValue(v);

    switch (cfg.type) {
      case 'number':
        return v === '' || v == null ? null : Number(v);
      case 'boolean':
        return !!v;
      case 'date':
        if (!v) return null;
        // eslint-disable-next-line no-case-declarations
        const d = v instanceof Date ? v : new Date(v);
        return isNaN(d.getTime()) ? null : d.toISOString();
      default:
        return v;
    }
  }

  // ========== Helpers for template ==========
  fieldOps(path: string | null): string[] {
    if (!path) return [];
    const f = this.fields.find((x) => x.path === path);
    return (f?.ops ?? []) as unknown as string[];
  }
  fieldType(path: string | null): string | null {
    const f = this.fields.find((x) => x.path === path);
    return f?.type ?? null;
  }
  fieldOptions(path: string | null) {
    const f = this.fields.find((x) => x.path === path);
    return f?.options ?? [];
  }
}
