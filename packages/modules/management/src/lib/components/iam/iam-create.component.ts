import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IamFacade, LocaleFacade, TimezoneFacade } from '@console-core/state';

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
export class IamCreateComponent {
  schema!: VCLFormFieldSchemaRoot; // = buildUserSchema({});
  create = this.iamFacade.create;

  readonly vm$ = combineLatest({
    user: this.iamFacade.selected$,
    locales: this.localeFacade.all$,
    timezones: this.timezoneFacade.all$,
  }).pipe(
    tap(({ user, locales, timezones }) => {
      this.schema = buildUserSchema({ user, locales, timezones });
    })
  );

  constructor(
    private readonly iamFacade: IamFacade,
    private readonly localeFacade: LocaleFacade,
    private readonly timezoneFacade: TimezoneFacade
  ) {}
}
