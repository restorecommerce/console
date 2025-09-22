import { IoRestorecommerceInvoiceInvoice } from '@console-core/graphql';
import { IInvoice, IMeta } from '@console-core/types';

type ApiReference = {
  instanceId?: string | null;
  instanceType?: string | null;
};

function splitReferenceIds(refs: ApiReference[] | null | undefined) {
  const orderIds: string[] = [];
  const fulfillmentIds: string[] = [];

  if (!Array.isArray(refs)) return { orderIds, fulfillmentIds };

  for (const r of refs) {
    const id = r?.instanceId ?? '';
    const t = r?.instanceType ?? '';
    if (!id) continue;

    if (t.endsWith(':order:Order')) {
      orderIds.push(id);
    } else if (t.endsWith(':fulfillment:Fulfillment')) {
      fulfillmentIds.push(id);
    }
  }

  return { orderIds, fulfillmentIds };
}

export function mapInvoiceReadResponseToInvoice(
  items: IoRestorecommerceInvoiceInvoice[]
): IInvoice[] {
  const invoices: IInvoice[] = [];

  items.forEach((item) => {
    const { orderIds, fulfillmentIds } = splitReferenceIds(item.references);

    invoices.push({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: item.id!,
      customerId: item.customerId ?? '',
      shopId: item.shopId ?? '',
      userId: item.userId ?? '',
      orderIds,
      fulfillmentIds,
      meta: item.meta as IMeta,

      fromDate: item.fromDate ?? null,
      toDate: item.toDate ?? null,
      withdrawn: item.withdrawn ?? null,
      paymentHints: item.paymentHints ?? null,
      customerOrderNumber: item.customerOrderNumber ?? null,
      totalAmounts: item.totalAmounts ?? null,
      documents: item.documents ?? null,
      recipient: item.recipient ?? null,
      billingAddress: item.billingAddress ?? null,
      paymentState: item.paymentState ?? null,
      sent: item.sent ?? null,
      customerVatId: item.customerVatId ?? null,
      sender: item.sender ?? null,
      invoiceNumber: item.invoiceNumber ?? null,
    });
  });

  return invoices;
}
