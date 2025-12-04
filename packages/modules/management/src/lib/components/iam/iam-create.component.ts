import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-create',
  template: ` <span>Create a user</span> `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamCreateComponent {
  // private readonly iamFacade: IamFacade,
  // private readonly jssFormService: JssFormService,
  // private readonly organizationContext: OrganizationContextFacade
  // create = this.iamFacade.create;
  // readonly vm$ = combineLatest([
  //   this.iamFacade.selected$,
  //   this.organizationContext.selectedId$,
  //   this.jssFormService.userForm$,
  //   this.jssFormService.formOptions$,
  // ]).pipe(
  //   map(([_, organizationId, form, options]) => {
  //     return {
  //       scope: organizationId as string,
  //       userCreationForm: form,
  //       options: {
  //         user: options.user,
  //         locales: options.locales,
  //         timezones: options.timezones,
  //       },
  //     };
  //   })
  // );
  // ngOnDestroy(): void {
  //   this.jssFormService.destroy();
  // }
}
