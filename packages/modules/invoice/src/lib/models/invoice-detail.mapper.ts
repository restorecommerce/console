import {
  IoRestorecommerceAddressBillingAddress,
  IoRestorecommerceAddressShippingAddress,
  IoRestorecommerceInvoiceInvoice,
  IoRestorecommerceReferenceReference,
} from '@console-core/graphql';

import {
  InvoiceDetail,
  InvoiceDetailParty,
  InvoiceReference,
} from './invoice-detail.model';
import { mapInvoiceDocument } from './invoice-document.mapper';
import { mapInvoiceSectionToVM } from './invoice-section.mapper';

type AddressTypes =
  | IoRestorecommerceAddressBillingAddress
  | IoRestorecommerceAddressShippingAddress;

export function mapInvoiceDetail(
  payload: IoRestorecommerceInvoiceInvoice
): InvoiceDetail {
  return {
    id: payload.id ?? '',
    invoiceNumber: payload.invoiceNumber ?? 'Untitled invoice',
    customerName: payload.customer?.name ?? undefined,
    shopName: payload.shop?.name ?? undefined,
    invoiceDate: payload.timestamp as number,
    paymentState: payload.paymentState ?? 'UNPAYED',
    sent: !!payload.sent,
    withdrawn: !!payload.withdrawn,
    toDate: (payload.toDate as number) ?? undefined,
    fromDate: (payload.fromDate as number) ?? undefined,
    amount: payload.totalAmounts?.[0].gross ?? 0, // TOTAL assumed from the first item.

    customerOrderNumber: payload.customerOrderNumber ?? undefined,
    customerVatId: payload.customerVatId ?? undefined,

    references: mapReferences(payload.references ?? []),
    paymentHints: payload.paymentHints ?? [],

    sender: mapParty(payload.sender, `${payload.shop?.name}`),
    recipient: mapParty(payload.recipient, `${payload.customer?.name}`),
    billing: mapParty(payload.billingAddress, `${payload.customer?.name}`),

    sections: (payload.sections ?? []).map((section, index) =>
      mapInvoiceSectionToVM(section, index)
    ),

    documents: (payload.documents ?? []).map((doc) => mapInvoiceDocument(doc)),
  };
}

function mapParty(
  party: AddressTypes | null | undefined,
  fallbackName?: string
): InvoiceDetailParty | undefined {
  if (!party) {
    return undefined;
  }

  const addressLines = [
    joinParts([party.address?.street, party.address?.buildingNumber]),
    party.address?.locality ?? undefined,
    party.address?.region ?? undefined,
    party.address?.countryId ?? undefined,
    party.contact?.email ?? undefined,
    party.contact?.phone ?? undefined,
  ].filter((line): line is string => !!line);

  return {
    name: party.contact?.name ?? fallbackName ?? undefined,
    subtitle: undefined,
    addressLines,
  };
}

function joinParts(
  parts: Array<string | null | undefined>
): string | undefined {
  const filtered = parts.filter((part): part is string => !!part);
  return filtered.length ? filtered.join(' ') : undefined;
}

function mapReferences(
  references: IoRestorecommerceReferenceReference[]
): InvoiceReference[] {
  return (references ?? []).map((ref, index) => ({
    label: simplifyReferenceType(ref?.instanceType) ?? `Reference ${index + 1}`,
    value: ref?.instanceId ?? '—',
  }));
}

function simplifyReferenceType(value?: string | null): string | undefined {
  if (!value) return undefined;

  const last = value.split(':').pop();
  return last || value;
}
