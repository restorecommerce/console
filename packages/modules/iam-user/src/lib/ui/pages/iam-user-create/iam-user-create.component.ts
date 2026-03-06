import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  RcPasswordFieldComponent,
  RcResourceDetailComponent,
  RcUsernameFieldComponent,
} from '@console/rc-ui';

import {
  VCLButtonComponent,
  VCLCheckboxComponent,
  VCLFormControlGroupModule,
  VCLIconComponent,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

import { mapFormToCreateUserCommand } from '../../../commands';
import {
  IamUserCreateFacade,
  OrganizationListFacade,
  RoleListFacade,
} from '../../../store';

@Component({
  selector: 'app-module-iam-user-create',
  templateUrl: './iam-user-create.component.html',
  providers: [IamUserCreateFacade, OrganizationListFacade, RoleListFacade],
  imports: [
    VCLInputModule,
    VCLSelectComponent,
    VCLIconComponent,
    VCLButtonComponent,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    RcResourceDetailComponent,
    ReactiveFormsModule,
    VCLCheckboxComponent,
    RcPasswordFieldComponent,
    RcUsernameFieldComponent
  ],
})
export class IAMUserCreateComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly facade = inject(IamUserCreateFacade);
  private readonly organizationFacade = inject(OrganizationListFacade);
  private readonly roleFacade = inject(RoleListFacade);

  readonly loading = this.facade.loading;

  roles = this.roleFacade.roles;

  organizations = this.organizationFacade.organizations;

  ngOnInit(): void {
    const generatedId = crypto.randomUUID();

    this.form = this.fb.group({
      id: [generatedId, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
      ],
      invite: [],
      password: [''],
      defaultScope: [''],
      roleAssignments: this.fb.array([]),
    });

    this.form.controls['invite'].valueChanges.subscribe((invite) => {
      const passwordControl = this.form.controls['password'];

      if (invite) {
        passwordControl.disable();
        passwordControl.reset();
      } else {
        passwordControl.enable();
      }
    });

    this.addRoleAssignment();

    this.roleFacade.loadList();
    this.organizationFacade.loadList();
  }

  ngOnDestroy(): void {
    this.facade.reset();
  }

  addRoleAssignment(): void {
    this.roleAssignments.push(
      this.fb.group({
        role: ['', Validators.required],
        scopeInstance: ['', Validators.required],
      })
    );
  }

  removeRoleAssignment(index: number): void {
    this.roleAssignments.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    const command = mapFormToCreateUserCommand(formValue);

    this.facade.create(command);
  }

  get roleAssignments(): FormArray {
    return this.form.get('roleAssignments') as FormArray;
  }
}
