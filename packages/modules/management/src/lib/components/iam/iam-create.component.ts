import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  IamFacade,
  LocaleFacade,
  RoleFacade,
  TimezoneFacade,
} from '@console-core/state';

import { buildUserSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-iam-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamCreateComponent implements OnInit {
  schema!: VCLFormFieldSchemaRoot; // = buildUserSchema({});
  create = this.iamFacade.create;

  readonly vm$ = combineLatest({
    user: this.iamFacade.selected$,
    locales: this.localeFacade.all$,
    timezones: this.timezoneFacade.all$,
    roles: this.roleFacade.all$,
  }).pipe(
    tap(({ user, locales, timezones, roles }) => {
      this.schema = buildUserSchema({ user, locales, timezones, roles });
    })
  );

  constructor(
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
