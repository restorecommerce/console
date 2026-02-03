import { IoRestorecommerceOrderOrder } from '@console-core/graphql';

import { mapHistory } from './order-history.mapper';
import { mapItem } from './order-item.mapper';
import { EOrderStatus } from './order-status.enum';
import { mapTotals } from './order-total.mapper';
import { Order } from './order.model';

export function mapOrderDto(dto: IoRestorecommerceOrderOrder): Order {
  return {
    id: dto.id ?? '',
    status: dto.orderState ?? EOrderStatus.Pending,
    shopId: dto.shopId ?? '',
    notificationEmail: dto.notificationEmail ?? '',
    destination: {
      country: dto.shippingAddress?.address?.country?.name || '', // TOOD Fix the country resolver in the order srv
      city: dto.shippingAddress?.address?.region || '',
      postalCode: dto.shippingAddress?.address?.postcode || '',
      addressLine1:
        dto.shippingAddress?.address?.buildingNumber +
        ' ' +
        dto.shippingAddress?.address?.street,
    },
    meta: {
      created: dto?.meta?.created as string, // ISO Date
      updated: dto?.meta?.modified as string, // ISO Date,
    },
    customer: {
      id: dto.userId || '',
      name: dto.shippingAddress?.contact?.name ?? '',
      email: dto.shippingAddress?.contact?.email || '',
      type: dto.customerType || 'PRIVATE',
    },
    user: {
      id: dto?.user?.id ?? '',
      firstName: dto?.user?.firstName ?? '',
      lastName: dto?.user?.lastName ?? '',
      email: dto?.user?.email ?? '',
    },
    items: (dto.items || []).map(mapItem), //dto.items.map(mapItem),
    totals: mapTotals(dto.totalAmounts?.[0]),
    history: mapHistory(dto.history),
  };
}
