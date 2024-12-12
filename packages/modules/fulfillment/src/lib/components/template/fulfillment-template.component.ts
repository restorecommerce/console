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

import { PAGINATION, ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceResourcebaseSortSortOrder,
} from '@console-core/graphql';
import { FulfillmentFacade, RouterFacade } from '@console-core/state';
import { ICrudFeature, EUrlSegment, IFulfillment } from '@console-core/types';

@Component({
  selector: 'app-module-fulfillment-template',
  templateUrl: './fulfillment-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  featureRouter = ROUTER.pages.main.children.fulfillments.children;

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Fulfillments',
      singular: 'Fulfillment',
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
    limit: PAGINATION.limit,
  };

  readonly triggerSubmitFulfillment = new BehaviorSubject<string | null>(null);
  readonly triggerSubmitFulfillment$ = this.triggerSubmitFulfillment
    .asObservable()
    .pipe(
      tap((id) => {
        if (id === null) {
          return;
        }

        this.fulfillmentFacade.submit({ id });
      })
    );

  readonly triggerRead = new BehaviorSubject<null>(null);
  readonly triggerRead$ = this.triggerRead
    .asObservable()
    .pipe(tap(() => this.fulfillmentFacade.read(this.queryVariables)));

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
      this.fulfillmentFacade.read(this.queryVariables);
    })
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.fulfillmentFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.fulfillmentFacade.remove({ id });
    })
  );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.fulfillmentFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    dataList: this.fulfillmentFacade.all$,
    selectedFulfillmentId: this.fulfillmentFacade.selectedId$,
    selectedFulfillment: this.fulfillmentFacade.selected$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
    triggerSubmitFulfillment: this.triggerSubmitFulfillment$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly fulfillmentFacade: FulfillmentFacade,
    private readonly routerFacade: RouterFacade
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

  trackByFn(_: number, item: IFulfillment) {
    return item.id;
  }

  onFulfilmentSelected(value: string) {
    this.triggerSelectId.next(value);
  }

  onSubmitFulfillment(id: string | null): void {
    this.triggerSubmitFulfillment?.next(id);
  }
}
