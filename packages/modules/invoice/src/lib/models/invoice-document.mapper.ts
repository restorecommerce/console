import { IoRestorecommerceFileFile } from '@console-core/graphql';

import { InvoiceDocumentVM } from './invoice-document.model';

export function mapInvoiceDocument(
  document: IoRestorecommerceFileFile
): InvoiceDocumentVM {
  const fileName = document.url?.split('/').pop() ?? 'invoice.pdf';

  return {
    id: `${document.id}`,
    name: fileName,
    url: document.url?.startsWith('//')
      ? `https:${document.url}`
      : (document.url ?? ''),
  };
}
