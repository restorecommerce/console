import { IoRestorecommerceOrderOrder } from '@console-core/graphql';

import { mapHistory } from './order-history.mapper';
import { mapItem } from './order-item.mapper';
import { EOrderStatus } from './order-status.enum';
import { Order } from './order.model';

export function mapOrderDto(dto: IoRestorecommerceOrderOrder): Order {
  return {
    id: dto.id ?? '',
    status: dto.orderState ?? EOrderStatus.Pending,
    shopId: dto.shopId ?? '',
    notificationEmail: dto.notificationEmail ?? '',
    meta: {
      created: dto?.meta?.created as string, // ISO Date
      updated: dto?.meta?.modified as string, // ISO Date,
    },
    customer: {
      id: dto?.customer?.id ?? '',
      name: dto?.customer?.name ?? '',
    },
    user: {
      id: dto?.user?.id ?? '',
      firstName: dto?.user?.firstName ?? '',
      lastName: dto?.user?.lastName ?? '',
      email: dto?.user?.email ?? '',
    },
    items: (dto.items || []).map(mapItem), //dto.items.map(mapItem),
    // totals: mapTotals(dto.totals),
    history: mapHistory(dto.history),
  };
}
