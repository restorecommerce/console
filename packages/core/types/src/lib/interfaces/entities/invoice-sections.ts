export type IInvoicePosition = {
  id: string;
  kind: 'product' | 'manual';
  title: string;
  sku?: string;
  variant?: string;
  productId?: string;
  quantity: number;
  currency: string;
  unit: number;
  total: number;
  sale?: boolean;
  imageUrl?: string; // resolve via your product image pipe
};

export type IInvoiceSection = {
  id: string; // orderId (matches section.id in the DTO)
  label: string; // e.g. "Order • 018f96d4"
  customerRemark?: string | null;
  positions: IInvoicePosition[];
  subtotal: { net?: number; gross?: number };
};

export type IInvoiceSections = {
  currency: string;
  sections: IInvoiceSection[];
};
