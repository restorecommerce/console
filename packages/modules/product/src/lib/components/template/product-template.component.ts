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
  switchMap,
  take,
} from 'rxjs/operators';
import { SubSink } from 'subsink';

import { PAGINATION, ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceResourcebaseSortSortOrder,
} from '@console-core/graphql';
import {
  CurrencyFacade,
  ProductFacade,
  RouterFacade,
  TaxFacade,
} from '@console-core/state';
import { ICrudFeature, EUrlSegment, IProduct } from '@console-core/types';

@Component({
  selector: 'app-module-product-template',
  templateUrl: './product-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  featureRouter = ROUTER.pages.main.children.products.children;
  page = {
    limit: PAGINATION.limit,
    offset: 0,
    total: 0,
  };

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Products',
      singular: 'Product',
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
    limit: this.page.limit,
    offset: this.page.offset,
  };

  readonly triggerRead = new BehaviorSubject<null>(null);
  readonly triggerRead$ = this.triggerRead
    .asObservable()
    .pipe(tap(() => this.productFacade.read(this.queryVariables)));

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
      this.productFacade.read(this.queryVariables);
    })
  );

  readonly triggerPagination = new BehaviorSubject<null>(null);
  readonly triggerPagination$ = this.triggerPagination.asObservable().pipe(
    skip(1),
    switchMap(() =>
      this.productFacade.total$.pipe(
        take(1),
        tap((total) => {
          this.page.total = total;
          this.queryVariables = {
            ...this.queryVariables,
            offset: total + this.page.limit,
          };
          this.productFacade.read(this.queryVariables);
        })
      )
    )
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.productFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.productFacade.remove({ id });
    })
  );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.productFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    dataList: this.productFacade.all$,
    selectedProductId: this.productFacade.selectedId$,
    selectedProduct: this.productFacade.selected$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly currencyFacade: CurrencyFacade,
    private readonly productFacade: ProductFacade,
    private readonly routerFacade: RouterFacade,
    private readonly taxFacade: TaxFacade
  ) {}

  ngOnInit(): void {
    this.currencyFacade.read({});
    this.taxFacade.read({});
    this.subscriptions.sink = this.triggerSearch$.subscribe();
    this.subscriptions.sink = this.triggerPagination$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSearch(value: string): void {
    this.triggerSearch.next(value);
  }

  onScrolled(index: number, total: number): void {
    if (index === total - 1) {
      this.triggerPagination.next(null);
    }
  }

  onItemSelected(itemId: string) {
    this.triggerSelectId.next(itemId);
    this.routerFacade.navigate(this.feature.links.view(itemId));
  }

  trackByFn(_: number, item: IProduct) {
    return item.id;
  }
}
