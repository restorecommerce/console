import { IoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';

import { mapFulfillmentParcelsToVM } from './fulfillment-parcel.mapper';
import { FulfillmentState } from './fulfillment-state.model';
import { Fulfillment } from './fulfillment.model';

export function mapFulfillmentDto(
  dto: IoRestorecommerceFulfillmentFulfillment
): Fulfillment {
  const parcels = mapFulfillmentParcelsToVM(dto);

  return {
    id: dto.id ?? '',

    state: dto.fulfillmentState as FulfillmentState,

    createdAt: new Date((dto.meta?.created as string) ?? Date.now()),
    modifiedAt: dto.meta?.modified
      ? new Date(dto.meta.modified as string)
      : undefined,

    shippingCost: {
      currency: dto.totalAmounts?.[0].currency?.code ?? 'EUR',
      gross: dto.totalAmounts?.[0].gross ?? 0,
      net: dto.totalAmounts?.[0].net ?? 0,
      tax: dto.totalAmounts?.[0].vats?.[0].vat ?? 0,
    },

    parcels,

    orderId:
      dto.references?.find((r) => r.instanceType?.includes('order'))
        ?.instanceId ?? undefined,

    customerId: dto.customerId ?? undefined,
    userId: dto.userId ?? undefined,
    shopId: dto.shopId ?? undefined,
  };
}
