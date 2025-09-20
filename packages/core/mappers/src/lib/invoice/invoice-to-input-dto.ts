import { IIoRestorecommerceInvoiceInvoice } from '@console-core/graphql';
import { IInvoice } from '@console-core/types';

export const invoiceToInputDTO = (
  invoice: IInvoice
): IIoRestorecommerceInvoiceInvoice => {
  return {
    id: invoice.id,
    userId: invoice.userId,
    paymentState: invoice.paymentState,
    shopId: invoice.shopId,
    customerId: invoice.customerId,
  };
};
