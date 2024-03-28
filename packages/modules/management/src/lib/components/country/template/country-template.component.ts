import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest, delay, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import { IoRestorecommerceResourcebaseSortSortOrder } from '@console-core/graphql';
import { CountryFacade, RouterFacade } from '@console-core/state';
import {
  ICrudActionStreams,
  ICrudFeature,
  ICrudSort,
  IDataListItem,
  IMeta,
  TRouterCrudSegment,
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

  public feature: ICrudFeature = {
    name: 'Management Countries',
    plural: 'Countries',
    singular: 'Country',
    links: {
      index: () => this.featureRouter.index.getLink(),
      create: () => this.featureRouter.create.getLink(),
      edit: (id: string) => this.featureRouter.edit.getLink({ id }),
      view: (id: string) => this.featureRouter.view.getLink({ id }),
    },
  };

  public actionStreams: ICrudActionStreams = {
    read: new BehaviorSubject<void | null>(null),
    setSelectedId: new BehaviorSubject<string | null>(null),
    delete: new BehaviorSubject<string | null>(null),
  };

  readonly vm$ = combineLatest({
    segment: this.routerFacade.url$.pipe(
      map((url) => url.split('/').pop() as TRouterCrudSegment),
      tap((segment) => {
        if (['index', 'create'].includes(segment)) {
          this.actionStreams.setSelectedId.next(null);
        }
      })
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
    isRequesting: this.countryFacade.isRequesting$,
    selectedCountryId: this.countryFacade.selectedId$,
    selectedCountry: this.countryFacade.selected$.pipe(
      map((country) => country || null)
    ),
    meta: this.countryFacade.selected$.pipe(
      map((country) => country || null),
      map((country) => country?.meta || (null as IMeta | null))
    ),
    readAction: this.actionStreams.read
      .asObservable()
      .pipe(tap(() => this.countryFacade.read(this.sort))),
    setSelectedIdAction: this.actionStreams.setSelectedId.asObservable().pipe(
      tap((id) => this.countryFacade.setSelectedId(id)),
      delay(10),
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
