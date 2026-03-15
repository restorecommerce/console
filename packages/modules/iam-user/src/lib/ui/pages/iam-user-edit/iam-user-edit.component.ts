import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';

import { mapFormToUpdateUserCommand } from '../../../commands';
import {
  IamUserEditFacade,
  OrganizationListFacade,
  RoleListFacade,
} from '../../../store';
import { IAMUserFormComponent } from '../../components/iam-user-form/iam-user-form.component';
import { createUserForm } from '../../components/iam-user-form/iam-user-form.factory';

@Component({
  selector: 'app-module-iam-user-edit',
  templateUrl: './iam-user-edit.component.html',
  providers: [OrganizationListFacade, RoleListFacade, IamUserEditFacade],
  imports: [RcResourceDetailComponent, IAMUserFormComponent],
})
export class IAMUserEditComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  private readonly facade = inject(IamUserEditFacade);
  private readonly organizationFacade = inject(OrganizationListFacade);
  private readonly roleFacade = inject(RoleListFacade);
  readonly loading = this.facade.loading;

  roles = this.roleFacade.roles;
  organizations = this.organizationFacade.organizations;
  user = this.facade.user;

  constructor() {
    effect(() => {
      const user = this.user();

      if (!user || !this.form) return;

      this.form.patchValue(user);
    });
  }

  ngOnInit(): void {
    this.form = createUserForm(this.fb);
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.facade.load(userId);
    }

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

    const command = mapFormToUpdateUserCommand(formValue);

    this.facade.update(command);
  }
}
