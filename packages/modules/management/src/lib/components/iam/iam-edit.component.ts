import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IamFacade,
  LocaleFacade,
  RoleFacade,
  RouterFacade,
  TimezoneFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildUserSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-iam-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamEditComponent implements OnInit {
  schema!: VCLFormFieldSchemaRoot;
  update = this.iamFacade.update;
  id: string | null = null;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.id = id;
        this.iamFacade.setSelectedId(id);
      })
    ),
    user: this.iamFacade.selected$.pipe(
      tap((user) => {
        if (!user) {
          this.iamFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.iam.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    locales: this.localeFacade.all$,
    timezones: this.timezoneFacade.all$,
    roles: this.roleFacade.all$,
  }).pipe(
    tap(({ user, locales, timezones, roles }) => {
      this.schema = buildUserSchema({ user, locales, timezones, roles });
    })
  );

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly iamFacade: IamFacade,
    private readonly localeFacade: LocaleFacade,
    private readonly timezoneFacade: TimezoneFacade,
    private readonly roleFacade: RoleFacade
  ) {}

  ngOnInit(): void {
    this.localeFacade.read({});
    this.timezoneFacade.read({});
    this.roleFacade.read({});
  }
}
