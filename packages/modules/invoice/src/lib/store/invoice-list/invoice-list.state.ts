import { InvoiceListItem } from '../../models';

export interface InvoiceListState {
  items: InvoiceListItem[];
  loading: boolean;
  error?: string;
}

export const initialInvoiceListState: InvoiceListState = {
  items: [],
  loading: false,
};
