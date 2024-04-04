import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceResourcebaseSortSortOrder,
} from '@console-core/graphql';
import { CountryFacade, RouterFacade } from '@console-core/state';
import {
  ICrudActionStreams,
  ICrudFeature,
  EUrlSegment,
  ICountry,
} from '@console-core/types';

@Component({
  selector: 'app-module-management-country-template',
  templateUrl: './country-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTemplateComponent implements OnInit {
  ROUTER = ROUTER;
  featureRouter =
    ROUTER.pages.main.children.management.children.countries.children;

  readonly feature: ICrudFeature = {
    name: {
      plural: 'Countries',
      singular: 'Country',
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

  readonly actionStreams: ICrudActionStreams = {
    read: new BehaviorSubject<void | null>(null),
    setSelectedId: new BehaviorSubject<string | null>(null),
    delete: new BehaviorSubject<string | null>(null),
  };

  private queryVariable: IIoRestorecommerceResourcebaseReadRequest = {
    sorts: [
      {
        field: 'name',
        order: IoRestorecommerceResourcebaseSortSortOrder.Ascending,
      },
    ],
    search: {
      caseSensitive: false,
      search: '',
      fields: ['name', 'geographical_name', 'country_code'],
    },
  };

  private searchValue = new BehaviorSubject<string>('');

  readonly vm$ = combineLatest({
    urlSegment: this.routerFacade.url$.pipe(
      map((url) => url.split('/').pop() as EUrlSegment),
      distinctUntilChanged(),
      tap((urlSegment) => {
        if ([EUrlSegment.INDEX, EUrlSegment.CREATE].includes(urlSegment)) {
          this.countryFacade.setSelectedId(null);
        }
      }),
      debounceTime(10)
    ),
    dataList: this.countryFacade.all$,
    selectedCountryId: this.countryFacade.selectedId$,
    selectedCountry: this.countryFacade.selected$.pipe(
      map((country) => country || null)
    ),
    readAction: this.actionStreams.read
      .asObservable()
      .pipe(tap(() => this.countryFacade.read(this.queryVariable))),
    setSelectedIdAction: this.actionStreams.setSelectedId
      .asObservable()
      .pipe(tap((id) => this.countryFacade.setSelectedId(id))),
    deleteAction: this.actionStreams.delete.asObservable().pipe(
      tap((id) => {
        if (id === null) {
          return;
        }
        this.countryFacade.delete({ ids: [id] });
      })
    ),
    searchValue: this.searchValue.asObservable().pipe(
      debounceTime(300),
      tap((value) => {
        this.queryVariable = {
          ...this.queryVariable,
          search: {
            ...this.queryVariable.search,
            search: value,
          },
        };
        this.countryFacade.read(this.queryVariable);
      })
    ),
  });

  constructor(
    private readonly countryFacade: CountryFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  ngOnInit(): void {
    this.countryFacade.read(this.queryVariable);
  }

  onSearch(value: string): void {
    this.searchValue.next(value);
  }

  trackByFn(_: number, item: ICountry) {
    return item.id;
  }
}
