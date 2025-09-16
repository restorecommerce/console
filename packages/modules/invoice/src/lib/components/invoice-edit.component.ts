import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  CustomerFacade,
  IamFacade,
  InvoiceFacade,
  RouterFacade,
  ShopFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildInvoiceSchema } from '../jss-forms';

@Component({
  selector: 'app-module-invoice-edit',
  template: `
    @if(vm$ | async; as vm) {
    <div class="mt-2">
      <rc-crud-edit
        [id]="vm.id"
        [schema]="vm.schema"
        [update]="update"
      />
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.invoiceFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.invoiceFacade.setSelectedId(id);
      })
    ),
    invoice: this.invoiceFacade.selected$.pipe(
      tap((invoice) => {
        if (!invoice) {
          this.invoiceFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.invoices.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    customers: this.customerFacade.all$,
    shops: this.shopFacade.all$,
    users: this.iamFacade.all$,
  }).pipe(
    map(({ id, invoice, customers, shops, users }) => {
      const schema = buildInvoiceSchema({
        invoice,
        customers,
        shops,
        users,
      });

      return {
        id,
        invoice,
        schema,
      };
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly shopFacade: ShopFacade,
    private readonly customerFacade: CustomerFacade,
    private readonly invoiceFacade: InvoiceFacade,
    private readonly iamFacade: IamFacade
  ) {}
}
