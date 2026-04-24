import { FulfillmentState } from './fulfillment-state.model';

export interface FulfillmentParcelItemVM {
  name: string;
  quantity: number;
  hsCode?: string;
  weightLabel: string;
  sizeLabel?: string;
  weight: number;
}

export interface FulfillmentParcelVM {
  id: string;
  shortId: string;
  productId?: string;
  variantId?: string;

  grossLabel?: string;
  netLabel?: string;
  vatLabel?: string;
  regularPriceLabel?: string;

  shipmentNumber?: string;
  labelState?: FulfillmentState;
  labelUrl?: string;

  items: FulfillmentParcelItemVM[];
}
