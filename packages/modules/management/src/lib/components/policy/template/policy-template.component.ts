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
import { RouterFacade, PolicyFacade } from '@console-core/state';
import { ICrudFeature, EUrlSegment } from '@console-core/types';

@Component({
  selector: 'app-module-management-policy-template',
  templateUrl: './policy-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PolicyTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  featureRouter =
    ROUTER.pages.main.children.management.children.accessControl.children
      .polices.children;

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Policies',
      singular: 'Policy',
    },
    links: {
      index: () => this.featureRouter.index.getLink(),
      create: () => this.featureRouter.index.getLink(),
      edit: (id: string | null) =>
        this.featureRouter.polices.getLink({ id: id ?? undefined }),
      view: (id: string | null) =>
        this.featureRouter.polices.getLink({ id: id ?? undefined }),
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
    .pipe(tap(() => this.policyFacade.read(this.queryVariables)));

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
          fields: ['name'],
        },
      };
      this.policyFacade.read(this.queryVariables);
    })
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.policyFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.policyFacade.remove({ id });
    })
  );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.policyFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    dataList: this.policyFacade.all$,
    selectedPolicyId: this.policyFacade.selectedId$,
    selectedPolicy: this.policyFacade.selected$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly policyFacade: PolicyFacade,
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
}
