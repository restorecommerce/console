import { IoRestorecommerceOrderItem } from '@console-core/graphql';

import { OrderItem } from './order-item.model';

export function mapItem(dto: IoRestorecommerceOrderItem): OrderItem {
  return {
    id: dto.id ?? '',

    productName: dto.product?.product?.name ?? '',
    // sku: dto ?? undefined,

    quantity: dto.quantity ?? 0,

    unitPrice: {
      amount: dto.unitPrice?.regularPrice ?? 0,
      currency: dto.unitPrice?.currencyId ?? '',
    },
    totalPrice: {
      amount: dto.amount?.net ?? 0,
      currency: dto.amount?.currencyId ?? '',
    },
  };
}
