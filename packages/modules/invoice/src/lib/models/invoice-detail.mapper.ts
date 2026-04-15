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

    customerOrderNumber: payload.customerOrderNumber ?? undefined,
    customerVatId: payload.customerVatId ?? undefined,

    references: mapReferences(payload.references ?? []),
    paymentHints: payload.paymentHints ?? [],

    sender: mapParty(payload.sender, `${payload.shop?.name}`),
    recipient: mapParty(payload.recipient, `${payload.customer?.name}`),
    billing: mapParty(payload.billingAddress, `${payload.customer?.name}`),

    documents: (payload.documents ?? []).map((doc, index) => ({
      id: doc.id ?? `document-${index}`,
      name: extractDocumentName(doc.url) ?? `Document ${index + 1}`,
      url: doc.url ?? undefined,
      createdLabel: undefined,
    })),
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

function extractDocumentName(url?: string | null): string | undefined {
  if (!url) return undefined;
  const parts = url.split('/');
  return parts[parts.length - 1] || undefined;
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
