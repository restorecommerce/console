export type InvoicePaymentState = 'UNPAYED' | 'PAYED';

export interface InvoiceDetailParty {
  name?: string;
  subtitle?: string;
  addressLines: string[];
}

export interface InvoiceAmount {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface InvoiceReference {
  label: string;
  value: string;
}

export interface InvoiceDocument {
  id: string;
  name: string;
  createdLabel?: string;
  url?: string;
}

export interface InvoicePosition {
  id: string;
  type: 'product' | 'fulfillment' | 'manual';
  title: string;
  subtitle?: string;
  quantity?: number;
  unitPriceLabel?: string;
  amountLabel?: string;
  periodLabel?: string;
  attributes?: Array<{ key: string; value: string }>;
}

export interface InvoiceSection {
  id: string;
  title: string;
  remark?: string;
  subtotalLabel?: string;
  positions: InvoicePosition[];
}

export interface InvoiceDetail {
  id: string;
  invoiceNumber: string;
  customerName?: string;
  shopName?: string;
  invoiceDate?: number;
  paymentState: InvoicePaymentState;
  sent: boolean;
  withdrawn: boolean;

  amount: number;
  fromDate?: number;
  toDate?: number;

  customerOrderNumber?: string;
  customerVatId?: string;

  references: InvoiceReference[];
  paymentHints: string[];

  sender?: InvoiceDetailParty;
  recipient?: InvoiceDetailParty;
  billing?: InvoiceDetailParty;

  totals?: InvoiceAmount[];
  sections?: InvoiceSection[];
  documents: InvoiceDocument[];
}
