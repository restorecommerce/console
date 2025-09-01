import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
  map,
  tap,
  distinctUntilChanged,
  debounceTime,
  skip,
} from 'rxjs/operators';
import { SubSink } from 'subsink';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceResourcebaseSortSortOrder,
} from '@console-core/graphql';
import {
  FulfillmentFacade,
  InvoiceFacade,
  OrderFacade,
  RouterFacade,
} from '@console-core/state';
import { ICrudFeature, EUrlSegment, IOrder } from '@console-core/types';

@Component({
  selector: 'app-module-order-template',
  templateUrl: './order-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  featureRouter = ROUTER.pages.main.children.orders.children;

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Orders',
      singular: 'Order',
    },
    links: {
      index: () => this.featureRouter.index.getLink(),
      create: () => this.featureRouter.create.getLink(),
      edit: (id: string | null) =>
        this.featureRouter.edit.getLink({ id: id ?? undefined }),
      view: (id: string | null) =>
        this.featureRouter.view.getLink({ id: id ?? undefined }),
    },
  };

  queryVariables: IIoRestorecommerceResourcebaseReadRequest = {
    sorts: [
      {
        field: 'meta.created',
        order: IoRestorecommerceResourcebaseSortSortOrder.Ascending,
      },
    ],
  };

  readonly triggerRead = new BehaviorSubject<null>(null);
  readonly triggerRead$ = this.triggerRead
    .asObservable()
    .pipe(tap(() => this.orderFacade.read(this.queryVariables)));

  readonly triggerSearch = new BehaviorSubject<string>('');
  readonly triggerSearch$ = this.triggerSearch.asObservable().pipe(
    skip(1),
    debounceTime(300),
    distinctUntilChanged(),
    tap((value) => {
      this.queryVariables = {
        ...this.queryVariables,
        search: {
          caseSensitive: false,
          search: value,
          fields: [],
        },
      };
      this.orderFacade.read(this.queryVariables);
    })
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.orderFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.orderFacade.remove({ id });
    })
  );

  readonly triggerCreateInvoice = new BehaviorSubject<string | null>(null);
  readonly triggerCreateInvoice$ = this.triggerCreateInvoice
    .asObservable()
    .pipe(
      tap((id) => {
        if (id === null) {
          return;
        }

        this.orderFacade.createOrderInvoice(id);
      })
    );

  readonly triggerCreateFulfillment = new BehaviorSubject<string | null>(null);
  readonly triggerCreateFulfillment$ = this.triggerCreateFulfillment
    .asObservable()
    .pipe(
      tap((id) => {
        if (id === null) {
          return;
        }

        this.orderFacade.createFulfilment(id);
      })
    );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.orderFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly readFulfillmentOnViewSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.View].includes(segment)) {
        console.log('Fulfilment is read');
        this.fulfillmentFacade.read({});
        this.invoiceFacade.read({});
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    dataList: this.orderFacade.all$,
    selectedOrderId: this.orderFacade.selectedId$,
    selectedOrder: this.orderFacade.selected$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
    triggerCreateInvoice: this.triggerCreateInvoice$,
    triggerCreateFulfillment: this.triggerCreateFulfillment$,
    readFulfillmentOnViewSegment: this.readFulfillmentOnViewSegment$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly orderFacade: OrderFacade,
    private readonly routerFacade: RouterFacade,
    private readonly fulfillmentFacade: FulfillmentFacade,
    private readonly invoiceFacade: InvoiceFacade
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.triggerSearch$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSearch(value: string): void {
    this.triggerSearch.next(value);
  }

  trackByFn(_: number, item: IOrder) {
    return item.id;
  }

  onCreateInvoice(id: string | null): void {
    this.triggerCreateInvoice?.next(id);
  }

  onCreateFulfillment(_: string | null): void {
    // this.triggerCreateFulfillment?.next(id);
  }

  onItemSelected(itemId: string) {
    this.triggerSelectId.next(itemId);
    this.routerFacade.navigate(this.feature.links.view(itemId));
  }
}
