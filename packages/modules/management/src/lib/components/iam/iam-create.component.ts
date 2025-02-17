import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { IamFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <app-user-creation-form
          [schema]="vm.userCreationForm"
          [options]="vm.options"
          [update]="create"
        />
      </div>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamCreateComponent implements OnDestroy {
  create = this.iamFacade.create;

  readonly vm$ = combineLatest([
    this.iamFacade.selected$,
    this.jssFormService.userForm$,
    this.jssFormService.formOptions$,
  ]).pipe(
    map(([_, form, options]) => {
      return {
        userCreationForm: form,
        options: {
          user: options.user,
          locales: options.locales,
          timezones: options.timezones,
          uniqueRoleAssociationsScopingInstances:
            options.roleAssociationsScopingInstances,
        },
      };
    })
  );

  constructor(
    private readonly iamFacade: IamFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
