import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  OrganizationFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildOrganizationSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-organization-edit',
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
export class OrganizationEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.organizationFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.organizationFacade.setSelectedId(id);
      })
    ),
    organization: this.organizationFacade.selected$.pipe(
      tap((organization) => {
        if (!organization) {
          this.organizationFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.organizations.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((organization) => {
        this.schema = buildOrganizationSchema({ organization });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly organizationFacade: OrganizationFacade
  ) {}
}
