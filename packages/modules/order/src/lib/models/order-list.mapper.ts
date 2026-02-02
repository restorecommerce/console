import { IoRestorecommerceOrderOrder } from '@console-core/graphql';
import { EOrderStatus } from '@console-core/types';

import { IOrderListItem } from './order-list-item.model';

export function mapOrderToListItem(
  order: IoRestorecommerceOrderOrder
): IOrderListItem {
  const created = order.meta?.created as string;

  return {
    id: order.id ?? '',
    displayNumber: order.customerOrderNr ?? '',
    status: order.orderState || EOrderStatus.Pending,
    total: {
      amount: 999,
      currency: 'EUR',
    },
    createdAt: new Date(created),
    // customerName: order.customer?.name || '',
  };
}
