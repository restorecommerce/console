import { InvoiceDocumentVM } from './invoice-document.model';
import { InvoiceSectionVM } from './invoice-section.model';

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
  sections: InvoiceSectionVM[];
  documents: InvoiceDocumentVM[];
}
