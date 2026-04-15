import { InvoiceDetail } from '../../models';

export interface InvoiceViewState {
  invoiceId: string | null;

  invoice: InvoiceDetail | null;

  loading: boolean;
  error: string | null;
}

export const initialInvoiceViewState: InvoiceViewState = {
  invoiceId: null,
  invoice: null,
  loading: false,
  error: null,
};
