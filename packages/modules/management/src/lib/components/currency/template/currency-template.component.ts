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
import { CurrencyFacade, RouterFacade } from '@console-core/state';
import { ICrudFeature, EUrlSegment, ICountry } from '@console-core/types';

@Component({
  selector: 'app-module-management-country-template',
  templateUrl: './currency-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CurrencyTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  featureRouter =
    ROUTER.pages.main.children.management.children.currencies.children;

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Currencies',
      singular: 'Currency',
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
        field: 'name',
        order: IoRestorecommerceResourcebaseSortSortOrder.Ascending,
      },
    ],
  };

  readonly triggerRead = new BehaviorSubject<null>(null);
  readonly triggerRead$ = this.triggerRead
    .asObservable()
    .pipe(tap(() => this.currencyFacade.read(this.queryVariables)));

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
          fields: ['name', 'geographical_name', 'country_code'],
        },
      };
      this.currencyFacade.read(this.queryVariables);
    })
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.currencyFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.currencyFacade.remove({ id });
    })
  );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.currencyFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    dataList: this.currencyFacade.all$,
    selectedCountryId: this.currencyFacade.selectedId$,
    selectedCountry: this.currencyFacade.selected$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly currencyFacade: CurrencyFacade,
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

  trackByFn(_: number, item: ICountry) {
    return item.id;
  }
}
