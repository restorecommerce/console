import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  OrderFacade,
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { OrderItemFormComponent } from '../modals/order-item/order-item-form.component';

@Component({
  selector: 'app-module-order-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-order-view
        [order]="vm.order"
        (openAddItemModal)="onAddOrder()"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderViewComponent implements OnInit, OnDestroy {
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

  addItemLayer!: LayerRef;

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private readonly orderFacade: OrderFacade,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {
    this.addItemLayer = this.layerService.create(OrderItemFormComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnDestroy() {
    this.addItemLayer?.destroy();
  }

  onAddOrder() {
    this.addItemLayer
      .open({
        data: {
          products: [], //this.products,
        },
      })
      .subscribe((result) => {
        console.log('Result: ' + result?.value);
      });
  }
}
