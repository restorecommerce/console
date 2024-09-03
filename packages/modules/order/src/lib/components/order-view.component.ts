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
  OrderFacade,
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { EAddressType, IOrder, IProduct } from '@console-core/types';

import { buildOrderAddressSchema, buildOrderSchema } from '../jss-forms';
import { JSSFormModalComponent } from '../modals/jss-form-modal.component';
import { OrderItemFormComponent } from '../modals/order-item/order-item-form.component';
import { transformOrderToInput } from '../utils';

@Component({
  selector: 'app-module-order-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-order-view
        [order]="vm.order"
        (openEditOrderInfoModal)="onOpenOrderDetailModal(vm.order)"
        (openAddItemModal)="onAddOrder(vm.order, vm.products)"
        (openAddressModal)="onOpenAddress(vm.order, $event)"
        (openEditOrderItemModal)="
          onOpenEditOrderItem(vm.order, vm.products, $event)
        "
        (openDeleteOrderItemModal)="onDeleteOrderItem(vm.order, $event)"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderViewComponent implements OnInit, OnDestroy {
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
  });

  // TODO REFACTOR the openAddItemModal to openAddOrderItemModal.

  orderDetailLayer!: LayerRef;
  addItemLayer!: LayerRef;
  addressLayer!: LayerRef;
  editItemLayer!: LayerRef;

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private readonly orderFacade: OrderFacade,
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

    this.addressLayer = this.layerService.create(JSSFormModalComponent, {
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
    // TODO use subsink
    this.addItemLayer?.destroy();
    this.addressLayer?.destroy();
    this.editItemLayer?.destroy();
    this.orderDetailLayer?.destroy();
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

  onAddOrder(order: IOrder, products: IProduct[]) {
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

  onOpenAddress(order: IOrder, addressType: EAddressType) {
    this.addressLayer
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
            addressType: addressType,
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
}
