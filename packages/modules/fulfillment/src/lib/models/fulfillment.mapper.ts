import { IoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';

import { FulfillmentState } from './fulfillment-state.model';
import { Fulfillment } from './fulfillment.model';

export function mapFulfillmentDto(
  dto: IoRestorecommerceFulfillmentFulfillment
): Fulfillment {
  const parcels =
    dto.packaging?.parcels?.map((p) => ({
      id: p.id ?? '',

      productId: p.productId ?? undefined,
      variantId: p.variantId ?? undefined,

      weightKg: p.package?.weightInKg ?? undefined,

      items:
        p.items?.map((i) => ({
          name: i.name ?? '',
          quantity: i.quantity ?? 0,
          productId: i.productId ?? '',
          weightKg: i.package?.weightInKg ?? undefined,
        })) ?? [],
    })) ?? [];

  const labels =
    dto.labels?.map((l) => ({
      id: l.id ?? '',
      parcelId: l.parcelId ?? '',
      shipmentNumber: l.shipmentNumber ?? '',
      state: l.state ?? '',
      url: l.file?.url ?? '',
    })) ?? [];

  return {
    id: dto.id ?? '',

    state: dto.fulfillmentState as FulfillmentState,

    createdAt: new Date((dto.meta?.created as string) ?? Date.now()),
    modifiedAt: dto.meta?.modified
      ? new Date(dto.meta.modified as string)
      : undefined,

    parcels,
    labels,

    shippingCost: {
      currency: dto.totalAmounts?.[0].currency?.code ?? 'EUR',
      gross: dto.totalAmounts?.[0].gross ?? 0,
    },

    orderId:
      dto.references?.find((r) => r.instanceType?.includes('order'))
        ?.instanceId ?? undefined,

    customerId: dto.customerId ?? undefined,
    userId: dto.userId ?? undefined,
    shopId: dto.shopId ?? undefined,
  };
}
