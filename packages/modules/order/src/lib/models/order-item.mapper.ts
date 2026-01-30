import { IoRestorecommerceOrderItem } from '@console-core/graphql';

import { OrderItem } from './order-item.model';

export function mapItem(dto: IoRestorecommerceOrderItem): OrderItem {
  return {
    id: dto.id ?? '',

    productName: dto.product?.product?.name ?? '',
    // sku: dto ?? undefined,

    quantity: dto.quantity ?? 0,

    // unitPrice: mapMoney(dto.unitPrice),
    // totalPrice: mapMoney(dto.amount),
  };
}
