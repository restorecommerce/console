import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { IamFacade, OrganizationContextFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-create',
  template: `
    @if (vm$ | async; as vm) {
    <div class="mt-2">
      <app-user-creation-form
        [schema]="vm.userCreationForm"
        [options]="vm.options"
        [update]="create"
        [scope]="vm.scope"
      />
    </div>
    }
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamCreateComponent implements OnDestroy {
  create = this.iamFacade.create;

  readonly vm$ = combineLatest([
    this.iamFacade.selected$,
    this.organizationContext.selectedId$,
    this.jssFormService.userForm$,
    this.jssFormService.formOptions$,
  ]).pipe(
    map(([_, organizationId, form, options]) => {
      return {
        scope: organizationId as string,
        userCreationForm: form,
        options: {
          user: options.user,
          locales: options.locales,
          timezones: options.timezones,
        },
      };
    })
  );

  constructor(
    private readonly iamFacade: IamFacade,
    private readonly jssFormService: JssFormService,
    private readonly organizationContext: OrganizationContextFacade
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
