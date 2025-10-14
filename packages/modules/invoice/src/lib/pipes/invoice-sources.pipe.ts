import { Pipe, PipeTransform } from '@angular/core';

import { invoiceToInputDTO } from '@console-core/mappers';
import { IInvoice } from '@console-core/types';

@Pipe({
  name: 'invoiceSource',
  standalone: false,
})
export class InvoiceSourcePipe implements PipeTransform {
  transform(invoice: IInvoice): string {
    const invoiceInput = invoiceToInputDTO(invoice);
    return JSON.stringify(invoiceInput, null, 4);
  }
}
