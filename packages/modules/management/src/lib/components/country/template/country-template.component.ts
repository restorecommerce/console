import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import { IoRestorecommerceResourcebaseSortSortOrder } from '@console-core/graphql';
import { CountryFacade, RouterFacade } from '@console-core/state';
import {
  ICrudActionStreams,
  ICrudFeature,
  ICrudSort,
  IDataListItem,
  EUrlSegment,
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

  readonly urlSegment = EUrlSegment;

  readonly vm$ = combineLatest({
    segment: this.routerFacade.url$.pipe(
      map((url) => url.split('/').pop() as EUrlSegment),
      distinctUntilChanged(),
      tap((segment) => {
        if ([this.urlSegment.INDEX, this.urlSegment.CREATE].includes(segment)) {
          this.actionStreams.setSelectedId.next(null);
        }
      }),
      debounceTime(10)
    ),
    data: this.countryFacade.all$.pipe(
      map((countries) => {
        return countries.map((country) => ({
          id: country.id || 'N/A',
          label: country.name || 'N/A',
        })) as IDataListItem[];
      })
    ),
    total: this.countryFacade.total$,
    selectedCountryId: this.countryFacade.selectedId$,
    selectedCountry: this.countryFacade.selected$.pipe(
      map((country) => country || null)
    ),
    meta: this.countryFacade.selected$.pipe(
      map((country) => (country && country?.meta) || null)
    ),
    readAction: this.actionStreams.read
      .asObservable()
      .pipe(tap(() => this.countryFacade.read(this.sort))),
    setSelectedIdAction: this.actionStreams.setSelectedId.asObservable().pipe(
      tap((id) => this.countryFacade.setSelectedId(id)),
      tap(() => this.changeDetectorRef.detectChanges())
    ),
    deleteAction: this.actionStreams.delete.asObservable().pipe(
      tap((id) => {
        if (id === null) {
          return;
        }
        this.countryFacade.delete({ ids: [id] });
      })
    ),
  });

  private sort: ICrudSort = {
    sorts: [
      {
        field: 'name',
        order: IoRestorecommerceResourcebaseSortSortOrder.Ascending,
      },
    ],
  };

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly countryFacade: CountryFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  ngOnInit(): void {
    this.countryFacade.read(this.sort);
  }
}
