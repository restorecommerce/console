export interface InvoiceListItem {
  id: string;
  invoiceNumber: string;
  customerName?: string;
  recipientName?: string;
  invoiceDate: number;
  amountLabel?: string;
  totalAmount: number;
  currency?: string;
  paymentState: 'UNPAYED' | 'PAYED';
  sent: boolean;
  withdrawn: boolean;
  hasDocuments: boolean;
  shopName?: string;
}
