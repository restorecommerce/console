import { IIoRestorecommerceInvoiceInvoice } from '@console-core/graphql';
import { IInvoice } from '@console-core/types';

export const invoiceToInputDTO = (
  invoice: IInvoice
): IIoRestorecommerceInvoiceInvoice => {
  return {
    id: invoice.id,
    customerId: invoice.customerId,
    shopId: invoice.shopId,
    userId: invoice.userId,
    withdrawn: invoice.withdrawn,
    customerOrderNumber: invoice.customerOrderNumber,
    customerVatId: invoice.customerVatId,
    fromDate: invoice.fromDate,
    toDate: invoice.toDate,
    invoiceNumber: invoice.invoiceNumber,
    sent: invoice.sent,
    paymentHints: invoice.paymentHints,
    paymentState: invoice.paymentState,
    timestamp: invoice.timestamp,
    references: invoice.references,
    documents: invoice.documents,
    sections: invoice.sections || [],
    totalAmounts: invoice.totalAmounts,
    sender: invoice.sender,
    billingAddress: invoice.billingAddress,
    recipient: invoice.recipient,
    meta: invoice.meta,
  };
};
