import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { AlertService, AlertType, LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceOrderOrder,
  IoRestorecommerceOrderItem,
  ModeType,
} from '@console-core/graphql';
import {
  CountryFacade,
  OrderFacade,
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { EAddressType, ICountry, IOrder, IProduct } from '@console-core/types';

import {
  buildOrderAddressSchema,
  buildOrderSchema,
  buildOrderShopSchema,
} from '../jss-forms';
import { JSSFormModalComponent } from '../modals/jss-form-modal.component';
import { OrderItemFormComponent } from '../modals/order-item/order-item-form.component';
import { transformOrderToInput } from '../utils';

@Component({
  selector: 'app-module-order-view',
  template: `
    @if (vm$ | async; as vm) {
    <div class="order-details">
      <div class="order-info">
        <rc-order-info
          [order]="vm.order"
          (openEditOrderInfoModal)="onOpenOrderDetailModal(vm.order)"
        />
      </div>

      <div class="order-items">
        <rc-order-items
          [items]="vm.order.items || []"
          (openAddItemModal)="openAddOrderItemModal(vm.order, vm.products)"
          (openEditOrderItemModal)="
            onOpenEditOrderItem(vm.order, vm.products, $event)
          "
          (openDeleteOrderItemModal)="onDeleteOrderItem(vm.order, $event)"
        />
      </div>

      <div class="order-totals">
        <rc-order-totals [totalAmounts]="vm.order.totalAmounts || []" />
      </div>

      <div class="related">
        <rc-heading-1>Related</rc-heading-1>

        <div class="mb-1">
          <a
            [routerLink]="
              this.ROUTER.pages.main.children.invoices.children.index.getLink()
            "
            [queryParams]="{ orderId: vm.order.id }"
          >
            View invoices for this order
          </a>
        </div>

        <div>
          <a
            [routerLink]="
              this.ROUTER.pages.main.children.fulfillments.children.index.getLink()
            "
            [queryParams]="{ orderId: vm.order.id }"
          >
            View fulfillments for this order
          </a>
        </div>
      </div>

      <div class="order-shipping-address">
        <rc-order-address
          title="Shipping address"
          [addressType]="addressType.shippingAddress"
          [rcOrderAddress]="vm.order.shippingAddress || undefined"
          (openAddressModal)="onOpenAddress(vm.order, $event, vm.countries)"
        />
      </div>

      <div class="order-shipping-address">
        <rc-order-address
          title="Billing address"
          [addressType]="addressType.billingAddress"
          [rcOrderAddress]="vm.order.billingAddress || undefined"
          (openAddressModal)="onOpenAddress(vm.order, $event, vm.countries)"
        />
      </div>

      <div class="order-shop">
        <rc-shop-info
          [shop]="vm.order.shop || {}"
          (openEditShopModal)="onOpenEditShopModal(vm.order)"
        />
      </div>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderViewComponent implements OnInit, OnDestroy {
  addressType = EAddressType;

  ROUTER = ROUTER;

  private readonly subscriptions = new SubSink();
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.orderFacade.setSelectedId(id);
        this.orderFacade.readOneById({ id });
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
      filterEmptyAndNullishAndUndefined()
    ),
    products: this.productFacade.all$,
    countries: this.countriesFacade.all$,
  });

  orderDetailLayer!: LayerRef;
  addItemLayer!: LayerRef;
  editAddressLayer!: LayerRef;
  editItemLayer!: LayerRef;
  editShopLayer!: LayerRef;

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private readonly orderFacade: OrderFacade,
    private readonly countriesFacade: CountryFacade,
    private layerService: LayerService,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.orderDetailLayer = this.layerService.create(JSSFormModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });

    this.addItemLayer = this.layerService.create(OrderItemFormComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });

    this.editAddressLayer = this.layerService.create(JSSFormModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });

    this.editShopLayer = this.layerService.create(JSSFormModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });

    this.editItemLayer = this.layerService.create(OrderItemFormComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();

    this.addItemLayer?.destroy();
    this.editAddressLayer?.destroy();
    this.editItemLayer?.destroy();
    this.orderDetailLayer?.destroy();
    this.editShopLayer?.destroy();
  }

  onOpenOrderDetailModal(order: IOrder) {
    this.orderDetailLayer
      .open({
        data: {
          title: 'Order',
          order,
          schema: buildOrderSchema({
            order,
          }),
        },
      })
      .subscribe();
  }

  openAddOrderItemModal(order: IOrder, products: IProduct[]) {
    this.addItemLayer
      .open({
        data: {
          title: 'Add item',
          order,
          products,
        },
      })
      .subscribe();
  }

  onOpenAddress(
    order: IOrder,
    addressType: EAddressType,
    countryList: ICountry[]
  ) {
    this.editAddressLayer
      .open({
        data: {
          order,
          title:
            addressType === EAddressType.billingAddress
              ? 'Billing address'
              : addressType === EAddressType.shippingAddress
              ? 'Shipping address'
              : 'Address',
          schema: buildOrderAddressSchema({
            addressType,
            order,
            countryList,
          }),
        },
      })
      .subscribe();
  }

  onOpenEditOrderItem(
    order: IOrder,
    products: IProduct[],
    orderItem: IoRestorecommerceOrderItem
  ) {
    this.editItemLayer
      .open({
        data: {
          title: 'Edit item',
          orderItem,
          order,
          products,
        },
      })
      .subscribe();
  }

  onDeleteOrderItem(
    order: IOrder,
    orderItem: IoRestorecommerceOrderItem
  ): void {
    this.subscriptions.sink = this.alertService
      .open({
        text: `Do you really want to delete ${orderItem.product?.product?.name}?`,
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: `Delete ${orderItem.product?.product?.name}`,
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (result.action !== 'confirm') {
          return;
        }

        const currentOrderInput = transformOrderToInput(order);

        const updatedOrderItems = currentOrderInput.items?.filter(
          (item) =>
            item.productId !== orderItem?.productId &&
            item.variantId !== orderItem?.variantId
        );

        const updatedOrderInput: IIoRestorecommerceOrderOrder = {
          ...currentOrderInput,
          items: updatedOrderItems,
        };

        this.orderFacade.update({
          items: [updatedOrderInput],
          mode: ModeType.Update,
        });
      });
  }

  onOpenEditShopModal(order: IOrder) {
    this.editShopLayer
      .open({
        data: {
          order,
          title: 'Edit shop',
          schema: buildOrderShopSchema({
            order,
          }),
        },
      })
      .subscribe();
  }
}
