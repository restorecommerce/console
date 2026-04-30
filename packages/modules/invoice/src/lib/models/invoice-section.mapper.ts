import {
  IoRestorecommerceInvoicePosition,
  IoRestorecommerceInvoiceSection,
} from '@console-core/graphql';

import { InvoicePositionVM, InvoiceSectionVM } from './invoice-section.model';

export function mapInvoiceSectionToVM(
  section: IoRestorecommerceInvoiceSection,
  index: number
): InvoiceSectionVM {
  return {
    id: `${section.id}`,
    title: `Section ${index + 1}`,
    customerRemark: section.customerRemark ?? undefined,
    amount: section.amounts?.[0].gross ?? 0,
    positions: (section.positions ?? []).map(mapInvoicePositionToVM),
  };
}

export function mapInvoicePositionToVM(
  position: IoRestorecommerceInvoicePosition
): InvoicePositionVM {
  const isProduct = !!position.productItem;

  return {
    id: `${position.id}`,
    type: isProduct ? 'product' : 'fulfillment',
    name: isProduct
      ? (position.productItem?.product?.product?.name ?? '—')
      : (position.fulfillmentItem?.product?.name ?? '—'),
    quantity: position.quantity ?? 0,

    unitPrice:
      position.unitPrice?.salePrice ?? position.unitPrice?.regularPrice ?? 0,
  };
}
