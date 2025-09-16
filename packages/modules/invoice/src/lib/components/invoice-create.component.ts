import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map, shareReplay } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  CustomerFacade,
  IamFacade,
  InvoiceFacade,
  ShopFacade,
} from '@console-core/state';

import { buildInvoiceSchema } from '../jss-forms';

@Component({
  selector: 'app-module-invoice-create',
  template: `
    @if (vm$ | async; as vm) {
    <div class="mt-2">
      <rc-crud-create
        [schema]="vm.schema"
        [create]="create"
      />
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceCreateComponent {
  schema!: VCLFormFieldSchemaRoot;

  create = this.invoiceFacade.create;

  readonly vm$ = combineLatest({
    customers: this.customerFacade.all$,
    shops: this.shopFacade.all$,
    users: this.iamFacade.all$,
  }).pipe(
    map(({ customers, shops, users }) => {
      const schema = buildInvoiceSchema({
        customers,
        shops,
        users,
      });

      return {
        schema,
      };
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private readonly invoiceFacade: InvoiceFacade,
    private readonly shopFacade: ShopFacade,
    private readonly customerFacade: CustomerFacade,
    private readonly iamFacade: IamFacade
  ) {}
}
