export interface InvoiceSectionVM {
  id: string;
  title: string;
  customerRemark?: string;
  amount: number;
  positions: InvoicePositionVM[];
}

export interface InvoicePositionVM {
  id: string;
  type: 'product' | 'fulfillment';
  name: string;
  quantity: number;
  unitPrice: number;
}
