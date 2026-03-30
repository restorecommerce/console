import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RcResourceDetailComponent } from '@console/rc-ui';

import { AccountFacade } from '@console-core/state';

import { mapFormToCreateUserCommand } from '../../../commands';
import {
  IamUserCreateFacade,
  OrganizationListFacade,
  RoleListFacade,
} from '../../../store';
import { IAMUserFormComponent } from '../../components/iam-user-form/iam-user-form.component';
import { createUserForm } from '../../components/iam-user-form/iam-user-form.factory';

@Component({
  selector: 'app-module-iam-user-create',
  templateUrl: './iam-user-create.component.html',
  providers: [IamUserCreateFacade, OrganizationListFacade, RoleListFacade],
  imports: [RcResourceDetailComponent, IAMUserFormComponent],
})
export class IAMUserCreateComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly facade = inject(IamUserCreateFacade);
  private readonly organizationFacade = inject(OrganizationListFacade);
  private readonly roleFacade = inject(RoleListFacade);
  private readonly accountFacade = inject(AccountFacade);

  readonly loading = this.facade.loading;

  roles = this.roleFacade.roles;

  organizations = this.organizationFacade.organizations;

  ngOnInit(): void {
    this.form = createUserForm(this.fb);

    this.roleFacade.loadList();
    this.organizationFacade.loadList();
  }

  ngOnDestroy(): void {
    this.facade.reset();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();
    const authenticatedUser = this.accountFacade.user();

    if (!authenticatedUser) {
      return;
    }

    const command = mapFormToCreateUserCommand(formValue, {
      firstName: authenticatedUser.firstName,
      lastName: authenticatedUser.lastName,
      username: authenticatedUser.name,
    });

    this.facade.create(command);
  }
}
