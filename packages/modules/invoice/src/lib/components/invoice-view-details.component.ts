import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { EInvoicePaymentState, IInvoice } from '@console-core/types';

@Component({
  selector: 'app-module-invoice-view-details',
  template: `
    <vcl-data-list
      [noBorder]="true"
      mode="none"
    >
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Invoice number</span>
          <span>{{ invoice.invoiceNumber }}</span>
        </div>
      </vcl-data-list-item>

      @if(invoice.paymentState) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Payment</span>
          <rc-badge
            [label]="invoice.paymentState"
            [type]="
              invoice.paymentState === EInvoicePaymentState.Payed
                ? 'success'
                : 'error'
            "
          />
        </div>
      </vcl-data-list-item>

      } @if (invoice.withdrawn || invoice.sent) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Status</span>
          <span>{{ invoice.withdrawn || invoice.sent }}</span>
        </div>
      </vcl-data-list-item>

      } @if (invoice.fromDate) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>From date</span>
          <span>{{ invoice.fromDate }}</span>
        </div>
      </vcl-data-list-item>

      } @if (invoice.toDate) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>To date</span>
          <span>{{ invoice.toDate }}</span>
        </div>
      </vcl-data-list-item>

      } @if (invoice.userId) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>User id</span>
          <a href="">{{ invoice.userId }}</a>
        </div>
      </vcl-data-list-item>

      } @if (invoice.customerId ) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Customer id</span>
          <a href="">{{ invoice.customerId }}</a>
        </div>
      </vcl-data-list-item>

      }@if (invoice.customerOrderNumber) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Customer order number</span>
          <span>{{ invoice.customerOrderNumber }}</span>
        </div>
      </vcl-data-list-item>

      } @if (invoice.shopId) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Shop id</span>
          <a href="">{{ invoice.shopId }}</a>
        </div>
      </vcl-data-list-item>

      }
      <div class="my-2 rc-lv-l-heading">Total</div>

      @for (total of invoice.totalAmounts; track $index) {
      <vcl-data-list-item>
        <div class="flex row justify-content-between align-item-center">
          <span>Total (net)</span>
          <span>{{ total?.net }} {{ total?.currency?.symbol || '€' }}</span>
        </div>
      </vcl-data-list-item>

      }
    </vcl-data-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceViewDetailsComponent {
  @Input({ required: true }) invoice!: IInvoice;

  EInvoicePaymentState = EInvoicePaymentState;

  cin() {
    this.EInvoicePaymentState.Unpayed;
  }
}
