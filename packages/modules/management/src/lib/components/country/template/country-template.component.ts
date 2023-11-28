import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { IoRestorecommerceResourcebaseSortSortOrder } from '@console-core/graphql';
import { CountryFacade, RouterFacade } from '@console-core/state';
import { IDataListItem, IMeta, TRouterCrudSegment } from '@console-core/types';

@Component({
  selector: 'app-module-management-country-template',
  templateUrl: './country-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTemplateComponent implements OnInit {
  ROUTER = ROUTER;
  featureRouter =
    ROUTER.pages.main.children.management.children.countries.children;

  public actionStreams = {
    read: new BehaviorSubject<void | null>(null),
    setSelectedId: new BehaviorSubject<string | null>(null),
    delete: new BehaviorSubject<string | null>(null),
  };

  readonly vm$ = combineLatest({
    segment: this.routerFacade.url$.pipe(
      map((url) => url.split('/').pop() as TRouterCrudSegment)
    ),
    allCountries: this.countryFacade.all$.pipe(
      tap((countries) => {
        this.data.list = countries.map((country) => ({
          id: country.id || 'N/A',
          label: country.name || 'N/A',
        }));
      })
    ),
    total: this.countryFacade.total$,
    selectedCountryId: this.countryFacade.selectedId$,
    selectedCountry: this.countryFacade.selected$.pipe(
      map((country) => country || null),
      tap((country) => {
        this.data.meta = country?.meta || null;
      })
    ),
    readAction: this.actionStreams.read.asObservable().pipe(
      tap(() => this.countryFacade.read(this.sort)),
      tap(() => console.log('Stream: read'))
    ),
    setSelectedIdAction: this.actionStreams.setSelectedId.asObservable().pipe(
      tap((id) => {
        setTimeout(() => {
          this.countryFacade.setSelectedId(id);
          this.changeDetectorRef.detectChanges();
        });
      }),
      tap((id) => console.log('Stream: setSelectedId', id))
    ),
    deleteAction: this.actionStreams.delete
      .asObservable()
      .pipe(tap((id) => console.log('Stream: delete', id))),
  });

  readonly vmDev$ = combineLatest({
    url: this.routerFacade.url$, // url
    id: this.routerFacade.params$, // url id
    country: this.countryFacade.selected$, // selected country
    isRequesting: this.countryFacade.isRequesting$,
  });

  public data: {
    meta: IMeta | null;
    list: IDataListItem[];
  } = {
    meta: null,
    list: [],
  };

  public actions = {
    read: () => this.countryFacade.read(this.sort),
    setSelectedId: (id: string | null) => {
      setTimeout(() => {
        this.countryFacade.setSelectedId(id);
        this.changeDetectorRef.detectChanges();
      });
    },
    delete: (id: string) => console.log('delete', id),
  };

  public links = {
    index: () => this.featureRouter.index.getLink(),
    create: () => this.featureRouter.create.getLink(),
    view: (id: string) => this.featureRouter.view.getLink({ id }),
    edit: (id: string) => this.featureRouter.edit.getLink({ id }),
  };

  private sort = {
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
