import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
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
  IamFacade,
  RoleFacade,
  RouterFacade,
  UserService,
} from '@console-core/state';
import { ICrudFeature, EUrlSegment, IUser, IRole } from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-template',
  templateUrl: './iam-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamTemplateComponent implements OnInit, OnDestroy {
  ROUTER = ROUTER;
  EUrlSegment = EUrlSegment;
  featureRouter = ROUTER.pages.main.children.management.children.iam.children;
  roleAssociationsRoles = '';

  feature: Readonly<ICrudFeature> = {
    name: {
      plural: 'Users',
      singular: 'User',
    },
    links: {
      index: () => this.featureRouter.index.getLink(),
      create: () => this.featureRouter.create.getLink(),
      edit: (id: string | null) =>
        this.featureRouter.edit.getLink({ id: id ?? undefined }),
      view: (id: string | null) =>
        this.featureRouter.view.getLink({ id: id ?? undefined }),
      'change-password': (id: string | null) =>
        this.featureRouter['change-password'].getLink({ id: id ?? undefined }),
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
    .pipe(tap(() => this.iamFacade.read(this.queryVariables)));

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
          fields: ['name', 'first_name', 'last_name', 'email'],
        },
      };
      this.iamFacade.read(this.queryVariables);
    })
  );

  readonly triggerSelectId = new BehaviorSubject<string | null>(null);
  readonly triggerSelectId$ = this.triggerSelectId
    .asObservable()
    .pipe(tap((id) => this.iamFacade.setSelectedId(id)));

  readonly triggerRemove = new BehaviorSubject<string | null>(null);
  readonly triggerRemove$ = this.triggerRemove.asObservable().pipe(
    tap((id) => {
      if (id === null) {
        return;
      }
      this.iamFacade.remove({ id });
    })
  );

  readonly urlSegment$ = this.routerFacade.url$.pipe(
    map((url) => url.split('/').pop() as EUrlSegment),
    distinctUntilChanged(),
    tap((segment) => {
      if ([EUrlSegment.Index, EUrlSegment.Create].includes(segment)) {
        this.iamFacade.setSelectedId(null);
      }
    }),
    debounceTime(10)
  );

  readonly vm$ = combineLatest({
    users: this.iamFacade.all$,
    selectedUserId: this.iamFacade.selectedId$,
    selectedUser: this.iamFacade.selected$,
    rolesHash: this.roleFacade.entities$,
    urlSegment: this.urlSegment$,
    triggerRead: this.triggerRead$,
    triggerSelectId: this.triggerSelectId$,
    triggerRemove: this.triggerRemove$,
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly iamFacade: IamFacade,
    private readonly routerFacade: RouterFacade,
    private readonly userService: UserService,
    private readonly roleFacade: RoleFacade
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

  getRoleAssociationsRoles(user: IUser, rolesHash: Dictionary<IRole>): string {
    return this.userService
      .getRoleAssociationsRoles(user, rolesHash)
      .map((role) => role?.name ?? 'N/A')
      .join(', ');
  }

  onItemSelected(itemId: string) {
    this.triggerSelectId.next(itemId);
    this.routerFacade.navigate(this.feature.links.view(itemId));
  }

  trackByFn(_: number, item: IUser) {
    return item.id;
  }
}
