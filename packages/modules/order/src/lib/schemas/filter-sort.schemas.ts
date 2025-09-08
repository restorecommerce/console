import { ResourceSchema } from '@console-core/types';

export const orderSchema: ResourceSchema = {
  title: 'Orders',
  quickSearchPaths: ['id', 'customer.name', 'user.id'],
  sortKeys: [
    { key: 'created_at', label: 'Created' },
    { key: 'updated_at', label: 'Updated' },
    { key: 'orderState', label: 'Order State' },
    { key: 'totals.grand', label: 'Grand Total' },
  ],
  fields: [
    {
      label: 'State',
      path: 'orderState',
      type: 'enum',
      ops: ['eq', 'in'],
      options: [
        { value: 'DRAFT', label: 'Draft' },
        { value: 'SUBMITTED', label: 'Submitted' },
        { value: 'PAID', label: 'Paid' },
        { value: 'FULFILLED', label: 'Fulfilled' },
        { value: 'CANCELLED', label: 'Cancelled' },
      ],
    },
    {
      label: 'Customer Name',
      path: 'customer.name',
      type: 'string',
      ops: ['contains', 'eq'],
    },
    {
      label: 'Customer Type',
      path: 'customerType',
      type: 'enum',
      ops: ['eq', 'in'],
      options: [
        { value: 'PRIVATE', label: 'Private' },
        { value: 'COMMERCIAL', label: 'Commercial' },
        { value: 'PUBLIC', label: 'Public' },
      ],
    },
    {
      label: 'Created',
      path: 'created_at',
      type: 'date',
      ops: ['between', 'gte', 'lte'],
    },
    {
      label: 'Grand Total',
      path: 'totals.grand',
      type: 'number',
      ops: ['between', 'gte', 'lte', 'eq'],
    },
    {
      label: 'Contains SKU',
      path: 'items[].sku',
      type: 'string',
      ops: ['contains', 'eq', 'in'],
    },
  ],
};
