import { IoRestorecommerceInvoiceInvoice } from '@console-core/graphql';

import { InvoiceListItem } from './user-list-item.model';

export function mapInvoiceToListItem(
  invoice: IoRestorecommerceInvoiceInvoice
): InvoiceListItem {
  const total = invoice?.totalAmounts?.[0];

  const totalAmount = total?.gross ?? 0;
  const currency = total?.currencyId ?? 'EUR';

  return {
    id: invoice?.id ?? '',

    invoiceNumber: invoice?.invoiceNumber ?? 'Untitled invoice',

    // Prefer customer → recipient → user → fallback
    customerName: invoice?.customer?.name ?? undefined,

    recipientName:
      invoice?.recipient?.contact?.name ??
      invoice?.customer?.name ??
      invoice?.user?.name ??
      'Unknown recipient',

    invoiceDate: (invoice?.timestamp as number) ?? 0,

    totalAmount,
    currency,

    // Default to UNPAYED if null
    paymentState: invoice?.paymentState ?? 'UNPAYED',

    sent: !!invoice?.sent,

    withdrawn: !!invoice?.withdrawn,

    hasDocuments: !!invoice?.documents?.length,

    shopName: invoice?.shop?.name ?? undefined,
  };
}
