import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest } from 'rxjs';

import { RoleFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-role-create',
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
export class RoleCreateComponent implements OnDestroy {
  create = this.roleFacade.create;

  readonly vm$ = combineLatest({
    schema: this.jssFormService.roleSchema$,
  });

  constructor(
    private readonly roleFacade: RoleFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
