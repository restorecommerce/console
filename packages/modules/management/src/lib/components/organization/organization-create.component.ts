import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest } from 'rxjs';

import { OrganizationFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-organization-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="vm.schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrganizationCreateComponent implements OnDestroy {
  create = this.organizationFacade.create;

  readonly vm$ = combineLatest({
    organization: this.organizationFacade.selected$,
    schema: this.jssFormService.organizationSchema$,
  });

  constructor(
    private readonly organizationFacade: OrganizationFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
