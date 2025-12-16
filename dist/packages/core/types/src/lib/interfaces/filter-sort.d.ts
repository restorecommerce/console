export type PrimitiveType = 'string' | 'number' | 'date' | 'boolean' | 'enum' | 'id';
export type Operation = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith' | 'in' | 'between' | 'isTrue' | 'isFalse' | 'isNull' | 'notNull';
export interface EnumOption {
    value: string;
    label: string;
}
export interface FieldConfig {
    /** Label for UI */
    label: string;
    /** Dot path into DTO (arrays allowed using []), e.g. "items[].sku", "customer.address.city" */
    path: string;
    /** Base value type to render the right input widget */
    type: PrimitiveType;
    /** Allowed operations for this field (controls the operator dropdown) */
    ops: Operation[];
    /** Optional enum options (when type === 'enum' or a constrained string) */
    options?: EnumOption[];
    /** Optional custom mapper: raw -> backend value */
    mapValue?: (v: any) => any;
}
export interface SortKey {
    key: string;
    label: string;
}
export interface ResourceSchema {
    /** Human name shown in the card header (e.g., "Products", "Orders") */
    title: string;
    /** Fields exposed to the UI */
    fields: FieldConfig[];
    /** Quick search across fields (we generate OR contains) */
    quickSearchPaths?: string[];
    /** Sorting options */
    sortKeys: SortKey[];
    /** Convert a field.path to backend field (override if facade uses other names) */
    mapField?: (path: string) => string;
    /** Per-resource defaults (e.g., default sort) */
    defaults?: {
        sort?: {
            by: string;
            dir: 'asc' | 'desc';
        };
    };
}
export interface SortState {
    by: string | null;
    dir: 'asc' | 'desc';
}
export interface FilterRow {
    fieldPath: string | null;
    op: Operation | null;
    /** Single or multiple depending on op/type; 'between' expects {min,max} */
    value: any;
}
export interface FilterSortState {
    rows: FilterRow[];
    blockOperator: 'and' | 'or';
    sort: SortState;
}
export interface BackendFilter {
    input: {
        filters: Array<{
            operator?: 'and' | 'or';
            filters: Array<{
                field: string;
                operation: Operation;
                value?: any;
            }>;
        }>;
    };
}
