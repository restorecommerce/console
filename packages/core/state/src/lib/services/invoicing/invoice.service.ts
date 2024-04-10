import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  IIoRestorecommerceInvoiceInvoiceList,
  IIoRestorecommerceResourcebaseDeleteRequest,
  IIoRestorecommerceResourcebaseReadRequest,
  InvoicingInvoiceDeleteGQL,
  InvoicingInvoiceDeleteMutation,
  InvoicingInvoiceMutateGQL,
  InvoicingInvoiceMutateMutation,
  InvoicingInvoiceReadGQL,
  InvoicingInvoiceReadQuery,
} from '@console-core/graphql';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(
    private readonly invoicingInvoiceReadGQL: InvoicingInvoiceReadGQL,
    private readonly invoicingInvoiceMutateGQL: InvoicingInvoiceMutateGQL,
    private readonly invoicingInvoiceDeleteGQL: InvoicingInvoiceDeleteGQL
  ) {}

  read(
    payload: IIoRestorecommerceResourcebaseReadRequest
  ): Observable<ApolloQueryResult<InvoicingInvoiceReadQuery>> {
    return this.invoicingInvoiceReadGQL.fetch({
      input: payload,
    });
  }

  mutate(
    payload: IIoRestorecommerceInvoiceInvoiceList
  ): Observable<MutationResult<InvoicingInvoiceMutateMutation>> {
    return this.invoicingInvoiceMutateGQL.mutate({
      input: payload,
    });
  }

  remove(
    payload: IIoRestorecommerceResourcebaseDeleteRequest
  ): Observable<MutationResult<InvoicingInvoiceDeleteMutation>> {
    return this.invoicingInvoiceDeleteGQL.mutate({
      input: payload,
    });
  }
}
