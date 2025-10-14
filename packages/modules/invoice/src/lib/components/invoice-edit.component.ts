import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { ModeType } from '@console-core/graphql';
import { invoiceToInputDTO } from '@console-core/mappers';
import {
  CustomerFacade,
  IamFacade,
  InvoiceFacade,
  RouterFacade,
  ShopFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IInvoice } from '@console-core/types';
import { omitNullishAndUndefined } from '@console-modules/shared';
import { JSONEditorComponent } from '@console-modules/ui';

import { buildInvoiceSchema } from '../jss-forms';

@Component({
  selector: 'app-module-invoice-edit',
  template: `
    @if(vm$ | async; as vm) {
    <div class="mt-2 flex col">
      <div class="col flex">
        <rc-json-editor
          #jsonEditor
          [value]="getInvoiceSource(vm.invoice)"
          class="flex"
        />

        <div class="py-2 row justify-content-end">
          <div class="loose-button-group">
            <button class="button transparent">Cancel</button>
            <button
              class="button"
              (click)="onSave()"
              [disabled]="jsonError"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InvoiceEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.invoiceFacade.update;

  jsonError = false;

  @HostBinding('class') classNames = 'col w-100p h-100p';

  @ViewChild('jsonEditor')
  jsonEditor!: JSONEditorComponent;

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

  getInvoiceSource(invoice: IInvoice): string {
    const invoiceInput = invoiceToInputDTO(invoice);
    return JSON.stringify(invoiceInput, null, 4);
  }

  onSave() {
    this.update({
      items: [
        {
          ...omitNullishAndUndefined(JSON.parse(this.jsonEditor.getValue())),
        },
      ],
      mode: ModeType.Update,
    });
  }
}
