import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceOrderItem,
  IIoRestorecommerceOrderOrder,
  IoRestorecommerceAmountAmount,
  IoRestorecommerceOrderItem,
  ModeType,
} from '@console-core/graphql';
import {
  OrderFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IOrder } from '@console-core/types';

import { buildOrderSchema } from '../jss-forms';

export const transformOrderToInput = (
  order: IOrder
): IIoRestorecommerceOrderOrder => {
  const inputItems: IIoRestorecommerceOrderItem[] = order.items
    ? order.items.map(
        (item: IoRestorecommerceOrderItem): IIoRestorecommerceOrderItem => {
          return {
            // id: item.id,
            productId: item.productId,
            variantId: item.variantId,
            parentItemId: item.parentItemId,
            quantity: item.quantity,
            unitPrice: {
              regularPrice: item.unitPrice?.regularPrice,
              sale: item.unitPrice?.sale,
              salePrice: item.unitPrice?.salePrice,
              currencyId: item.unitPrice?.currencyId,
            },
          };
        }
      )
    : [];

  const totalAmounts = order.totalAmounts
    ? order.totalAmounts.map((orderAmount): IoRestorecommerceAmountAmount => {
        return {
          gross: orderAmount.gross,
          net: orderAmount.net,
          currencyId: orderAmount.currencyId,
        };
      })
    : [];

  return {
    id: order.id,
    shopId: order.shopId,
    notificationEmail: order.notificationEmail,
    orderState: order.orderState,
    customerType: order.customerType,
    customerVatId: order.customerVatId,
    paymentMethodId: order.paymentMethodId,
    shippingAddress: {
      address: {
        // id: order.shippingAddress?.address?.id,
        locality: order.shippingAddress?.address?.locality,
        street: order.shippingAddress?.address?.street,
        region: order.shippingAddress?.address?.region,
        countryId: order.shippingAddress?.address?.countryId,
        buildingNumber: order.shippingAddress?.address?.buildingNumber,
        postcode: order.shippingAddress?.address?.postcode,
        // altitude: null,
        // addressAddition: {
        //   field1: '',
        //   field2: '',
        // },
        // businessAddress: {
        //   name: order.shippingAddress?.address?.businessAddress?.name,
        // },
        // residentialAddress: {
        //   title: null,
        //   givenName: null,
        //   midName: null,
        //   familyName: null,
        // },
        // geoCoordinates: {
        //   latitude: null,
        //   longitude: null,
        // },
        // packStation: {
        //   provider: null,
        //   stationNumber: null,
        //   postNumber: null,
        // },
      },
      // contact: {
      //   name: null,
      //   email: null,
      //   phone: null,
      // },
      // comments: null,
    },
    billingAddress: {
      address: {
        // id: order.billingAddress?.address?.id,
        postcode: order.billingAddress?.address?.postcode,
        countryId: order.billingAddress?.address?.countryId,
        locality: order.billingAddress?.address?.locality,
        street: order.billingAddress?.address?.street,
        region: order.billingAddress?.address?.region,
        // altitude: null,
        buildingNumber: order.billingAddress?.address?.buildingNumber,
        // geoCoordinates: {
        //   latitude: null,
        //   longitude: null,
        // },
        // addressAddition: {
        //   field1: '',
        //   field2: '',
        // },
        // businessAddress: {
        //   name: order.billingAddress?.address?.businessAddress?.name,
        // },
        // residentialAddress: {
        //   title: null,
        //   givenName: null,
        //   midName: null,
        //   familyName: null,
        // },
        // packStation: {
        //   provider: null,
        //   stationNumber: null,
        //   postNumber: null,
        // },
      },
      // contact: {
      //   name: null,
      //   email: null,
      //   phone: null,
      // },
      // comments: null,
    },
    totalAmounts: [...totalAmounts],
    items: [...inputItems],
  };
};

@Component({
  selector: 'app-module-order-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2 h-100p">
        <!-- <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        /> -->
        <form>
          <textarea
            #rawTextarea
            name="json"
            (input)="onInput()"
            [value]="orderJSON || getOrderSource(vm.order)"
          ></textarea>

          <div class="py-2 row justify-content-end">
            <div class="loose-button-group">
              <button
                vcl-button
                class="transparent"
              >
                Cancel
              </button>
              <button
                vcl-button
                (click)="onSave()"
                [disabled]="jsonError"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      form {
        display: flex;
        height: 100%;
        flex-direction: column;
      }

      textarea {
        width: 100%;
        flex: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.orderFacade.update;

  orderJSON = '';
  modified = false;
  jsonError = false;

  @ViewChild('rawTextarea')
  rawTextarea!: ElementRef;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.orderFacade.setSelectedId(id);
      })
    ),
    order: this.orderFacade.selected$.pipe(
      tap((order) => {
        if (!order) {
          this.orderFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.orders.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((order) => {
        this.schema = buildOrderSchema({ order });
      })
    ),
  });

  getOrderSource(order: IOrder) {
    const orderInput = transformOrderToInput(order);
    console.log(order);
    return JSON.stringify(orderInput, null, 4);
  }

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly orderFacade: OrderFacade
  ) {}

  onInput() {
    const textarea = this.rawTextarea.nativeElement as HTMLTextAreaElement;
    this.orderJSON = textarea.value;

    this.modified = true;

    let error = '';

    try {
      JSON.stringify(JSON.parse(this.orderJSON));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      error = e.message;
    }

    textarea.setCustomValidity(error ? 'Invalid JSON: ' + error : '');

    textarea.reportValidity();
    this.jsonError = !!error;
    console.log(this.orderJSON);
  }

  onSave() {
    console.log();
    this.update({
      items: [
        {
          ...JSON.parse(this.orderJSON),
        },
      ],
      mode: ModeType.Update,
    });
  }
}
