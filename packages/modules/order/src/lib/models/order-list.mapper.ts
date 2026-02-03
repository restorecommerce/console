import { IoRestorecommerceOrderOrder } from '@console-core/graphql';
import { EOrderStatus } from '@console-core/types';

import { IOrderListItem } from './order-list-item.model';

export function mapOrderToListItem(
  order: IoRestorecommerceOrderOrder
): IOrderListItem {
  const created = order.meta?.created as string;

  return {
    id: order.id ?? '',
    displayNumber: order.id ?? '',
    status: order.orderState || EOrderStatus.Pending,
    total: {
      amount: order?.totalAmounts?.[0].gross || 0,
      currency: order?.totalAmounts?.[0].currency?.code || 'EUR',
    },
    createdAt: new Date(created),
    // customerName: order.customer?.name || '',
  };
}
