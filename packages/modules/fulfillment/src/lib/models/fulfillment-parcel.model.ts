export interface FulfillmentParcelItemVM {
  name: string;
  quantity: number;
  hsCode?: string;
  weightLabel?: string;
  sizeLabel?: string;
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
  labelState?: string;
  labelUrl?: string;

  items: FulfillmentParcelItemVM[];
}
