import { DatePipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';
import { distinctUntilChanged, filter, map } from 'rxjs';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
} from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';

import { InvoiceViewFacade } from '../../../store';

@Component({
  selector: 'app-module-invoice-view',
  templateUrl: './invoice-view.component.html',
  imports: [
    JsonPipe,
    DatePipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    RcResourceDetailComponent,
  ],
  styleUrl: './invoice-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [InvoiceViewFacade],
})
export class InvoiceViewComponent implements OnInit {
  private readonly invoiceFacade = inject(InvoiceViewFacade);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly invoice = this.invoiceFacade.invoice;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((p) => p.get('id')),
        filter((id): id is string => !!id),
        distinctUntilChanged()
      )
      .subscribe((invoiceId) => {
        this.invoiceFacade.enterPage(invoiceId);
      });
  }

  goBack() {
    // TODO
  }

  editInvoice() {
    const invoiceId = this.invoice()?.id;

    return (
      invoiceId &&
      this.router.navigate(
        ROUTER.pages.main.children.invoices.children.edit.getLink({
          id: invoiceId,
        })
      )
    );
  }

  deleteInvoice() {
    // TODO
  }
}
