import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
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

      <section class="related">
        <rc-heading-1>Linked entities</rc-heading-1>

        <div class="rel-row">
          <span class="rel-label">Orders</span>
          @for(id of invoice.orderIds; ; track id) {
          <a
            class="chip"
            [routerLink]="ROUTER.pages.main.children.orders.children.view.getLink({ id })"
            [title]="id"
          >
            <span class="chip-icon">🧾</span>
            {{ id | slice : 0 : 8 }}
          </a>
          } @empty {
          <span class="muted">None</span>
          }
        </div>

        <div class="rel-row">
          <span class="rel-label">Fulfillments</span>

          @for(id of invoice.fulfillmentIds; track id) {
          <a
            class="chip chip-alt"
            [routerLink]="ROUTER.pages.main.children.fulfillments.children.view.getLink({ id })"
            [title]="id"
          >
            <span class="chip-icon">📦</span>
            {{ id | slice : 0 : 8 }}…
          </a>
          } @empty {
          <span class="muted">None</span>
          }
        </div>
      </section>

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
  styles: [
    `
      /* invoice-view.component.scss */
      .related {
        margin-top: 1rem;
      }
      .rel-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0.5rem 0;
        flex-wrap: wrap;
      }
      .rel-label {
        width: 8rem;
        font-weight: 600;
        color: #556;
      }
      .muted {
        color: #9aa3af;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        background: #eef2ff;
        border: 1px solid #c7d2fe;
        text-decoration: none;
        font-size: 0.85rem;
        line-height: 1;
        color: #1f2937;
      }
      .chip:hover {
        background: #e0e7ff;
      }
      .chip-alt {
        background: #ecfeff;
        border-color: #a5f3fc;
      }
      .chip-icon {
        font-size: 0.9rem;
      }
      .chip-action {
        border: 0;
        background: transparent;
        cursor: pointer;
        font-size: 0.9rem;
        padding: 0 0.1rem;
        opacity: 0.7;
      }
      .chip-action:hover {
        opacity: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceViewDetailsComponent {
  @Input({ required: true }) invoice!: IInvoice;

  EInvoicePaymentState = EInvoicePaymentState;

  ROUTER = ROUTER;
}
