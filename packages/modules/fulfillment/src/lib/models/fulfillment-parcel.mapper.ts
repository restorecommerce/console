import {
  IoRestorecommerceFulfillmentFulfillment,
  IoRestorecommerceFulfillmentFulfillmentState,
  IoRestorecommerceFulfillmentItem,
  IoRestorecommerceFulfillmentLabel,
  IoRestorecommerceFulfillmentParcel,
} from '@console-core/graphql';

import {
  FulfillmentParcelItemVM,
  FulfillmentParcelVM,
} from './fulfillment-parcel.model';

export function mapFulfillmentParcelsToVM(
  payload: IoRestorecommerceFulfillmentFulfillment
): FulfillmentParcelVM[] {
  const parcels = payload?.packaging?.parcels ?? [];
  const labels = payload?.labels ?? [];

  return parcels.map(
    (parcel: IoRestorecommerceFulfillmentParcel): FulfillmentParcelVM => {
      const label = labels.find(
        (l: IoRestorecommerceFulfillmentLabel) => l.parcelId === parcel.id
      );

      const currency =
        parcel.amount?.currencyId ?? parcel.price?.currencyId ?? '';

      return {
        id: `${parcel.id}`,
        shortId: `${parcel.id?.slice(0, 8)}`,
        productId: `${parcel.productId}`,
        variantId: `${parcel.variantId}`,

        grossLabel: formatMoney(parcel.amount?.gross ?? 0, currency),
        netLabel: formatMoney(parcel.amount?.net ?? 0, currency),
        vatLabel: formatMoney(parcel.amount?.vats?.[0]?.vat ?? 0, currency),
        regularPriceLabel: formatMoney(
          parcel.price?.regularPrice ?? 0,
          currency
        ),

        shipmentNumber: `${label?.shipmentNumber}`,
        labelState:
          label?.state ?? IoRestorecommerceFulfillmentFulfillmentState.Pending,
        labelUrl: `${label?.file?.url}`,

        items: (parcel.items ?? []).map(
          (item: IoRestorecommerceFulfillmentItem) =>
            ({
              name: item.name,
              quantity: item.quantity,
              hsCode: item.hsCode,
              weight: item.package?.weightInKg,
              weightLabel: item.package?.weightInKg
                ? `${item.package.weightInKg} kg`
                : '—',
              sizeLabel: item.package?.sizeInCm
                ? `${item.package.sizeInCm.length} × ${item.package.sizeInCm.width} × ${item.package.sizeInCm.height} cm`
                : '—',
            }) as FulfillmentParcelItemVM
        ),
      };
    }
  );
}

function formatMoney(value?: number, currency?: string): string {
  if (value == null) return '—';

  return `${value.toFixed(2)} ${currency ?? ''}`.trim();
}
