import {
  IIoRestorecommerceAmountAmount,
  IIoRestorecommerceAmountVat,
  IIoRestorecommerceInvoiceInvoice,
  IIoRestorecommerceInvoicePosition,
  IIoRestorecommerceInvoiceSection,
} from '@console-core/graphql';
import { IInvoice } from '@console-core/types';

const invoiceSectionInput = (
  invoice: IInvoice
): IIoRestorecommerceInvoiceSection[] => {
  if (!invoice.sections) return [];

  return invoice.sections.map((sec): IIoRestorecommerceInvoiceSection => {
    return {
      id: sec.id,
      amounts: sec.amounts?.map((amount): IIoRestorecommerceAmountAmount => {
        return {
          currencyId: amount.currencyId,
          gross: amount.gross,
          net: amount.net,
          vats: amount.vats?.map((vat): IIoRestorecommerceAmountVat => {
            return {
              taxId: vat.taxId,
              vat: vat.vat,
            };
          }),
        };
      }),
      customerRemark: sec.customerRemark,
      positions: sec.positions?.map(
        (position): IIoRestorecommerceInvoicePosition => {
          return {
            id: position.id,
            amount: {
              currencyId: position.amount?.currencyId,
              gross: position.amount?.gross,
              net: position.amount?.net,
              vats: position.amount?.vats,
            },
            productItem: {
              productId: position.productItem?.productId,
              variantId: position.productItem?.variantId,
            },
            fromDate: position.fromDate,
            toDate: position.toDate,
            quantity: position.quantity,
            unitPrice: {
              currencyId: position.unitPrice?.currencyId,
              regularPrice: position.unitPrice?.regularPrice,
              sale: position.unitPrice?.sale,
              salePrice: position.unitPrice?.salePrice,
            },
            attributes: position.attributes,
          };
        }
      ),
    };
  });
};

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
    sections: invoiceSectionInput(invoice),
    totalAmounts: invoice.totalAmounts,
    sender: invoice.sender,
    billingAddress: invoice.billingAddress,
    recipient: invoice.recipient,
    meta: invoice.meta,
  };
};
