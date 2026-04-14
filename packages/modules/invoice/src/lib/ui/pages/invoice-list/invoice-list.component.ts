import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { ROUTER } from '@console-core/config';

import { InvoiceListFacade } from '../../../store';
import { InvoiceListItemComponent } from '../../components/invoice-list-item/invoice-list-item.component';

@Component({
  selector: 'app-module-invoice-list',
  templateUrl: './invoice-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [InvoiceListFacade],
  styleUrl: './invoice-list.component.scss',
  imports: [RcResourceListComponent, InvoiceListItemComponent],
})
export class InvoiceListComponent implements OnInit {
  private readonly invoiceFacade = inject(InvoiceListFacade);
  private readonly router = inject(Router);

  items = this.invoiceFacade.invoices;

  ngOnInit(): void {
    this.invoiceFacade.loadList();
  }

  onSelect(invoice: { id: string }): void {
    this.router.navigate(
      ROUTER.pages.main.children.iam.children.view.getLink({
        id: invoice.id,
      })
    );
  }

  onCreate(): void {
    this.router.navigate([ROUTER.pages.main.children.iam.children.create.link]);
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
