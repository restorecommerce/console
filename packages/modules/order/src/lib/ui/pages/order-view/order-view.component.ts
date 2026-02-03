import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';
import { distinctUntilChanged, filter, map } from 'rxjs';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
  VCLBadgeComponent,
  VCLIconComponent,
} from '@vcl/ng-vcl';

import { CUSTOMER_TYPE_LABEL, Money } from '../../../models';
import { OrderViewFacade } from '../../../store';

@Component({
  selector: 'app-module-order-view',
  templateUrl: './order-view.component.html',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    VCLIconComponent,
    RcResourceDetailComponent,
    VCLBadgeComponent,
  ],
  styleUrl: './order-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderViewFacade],
})
export class OrderViewComponent implements OnInit {
  private readonly orderFacade = inject(OrderViewFacade);
  private readonly route = inject(ActivatedRoute);

  readonly order = this.orderFacade.order;

  destination = computed(() => {
    const d = this.order()?.destination;
    if (!d) return '—';

    return [d.addressLine1, d.postalCode, d.city, d.country]
      .filter(Boolean)
      .join(', ');
  });

  totals = computed(() => this.order()?.totals);

  itemCount = computed(() => this.order()?.items.length ?? 0);

  // Fulfilment
  fulfilmentCount = this.orderFacade.fulfilmentCount;

  hasFulfilments = this.orderFacade.hasFulfilments;

  // Invoice
  invoiceCount = this.orderFacade.invoiceCount;

  hasInvoices = this.orderFacade.hasInvoices;

  customer = computed(() => this.order()?.customer);

  customerTypeLabel = computed(() => {
    const type = this.customer()?.type;
    return type ? CUSTOMER_TYPE_LABEL[type] : '—';
  });

  customerDisplayName = computed(() => {
    const c = this.customer();
    return c?.name || '—';
  });

  customerEmail = computed(() => {
    const c = this.customer();
    return c?.email || '—';
  });

  formattedMoney = (m?: Money) =>
    m ? `${m.amount.toFixed(2)} ${m.currency}` : '—';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((p) => p.get('id')),
        filter((id): id is string => !!id),
        distinctUntilChanged()
      )
      .subscribe((orderId) => {
        this.orderFacade.enterPage(orderId);
      });
  }

  goBack() {
    // TODO
  }

  editOrder() {
    // TODO
  }

  deleteOrder() {
    // TODO
  }
}
