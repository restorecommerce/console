import { IoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';

import { FulfillmentListItem } from './fulfillment-list-item.model';
import { FulfillmentState } from './fulfillment-state.model';

export function mapFulfillmentToListItem(
  payload: IoRestorecommerceFulfillmentFulfillment
): FulfillmentListItem {
  const parcels = payload.packaging?.parcels ?? [];

  return {
    id: payload.id ?? '',

    state: payload.fulfillmentState as FulfillmentState,

    parcelCount: parcels.length,

    itemCount: parcels.reduce((sum, p) => sum + (p.items?.length ?? 0), 0),

    // shippingCost: payload.totalAmounts?.[0],

    createdAt: new Date(payload.meta?.created as string),

    orderId: payload.references?.find((r) => r.instanceType?.includes('order'))
      ?.instanceId as string,
  };
}
