import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  RcPasswordFieldComponent,
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

import { OrganizationListItem, RoleListItem } from '../../../models';

@Component({
  selector: 'app-iam-user-form',
  standalone: true,
  templateUrl: './iam-user-form.component.html',
  imports: [
    ReactiveFormsModule,
    VCLInputModule,
    VCLSelectComponent,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    VCLFormControlGroupModule,
    VCLButtonComponent,
    VCLCheckboxComponent,
    VCLIconComponent,
    RcPasswordFieldComponent,
    RcUsernameFieldComponent,
  ],
})
export class IAMUserFormComponent {
  @Input({ required: true })
  form!: FormGroup;

  @Input()
  organizations: OrganizationListItem[] = [];

  @Input()
  roles: RoleListItem[] = [];

  @Input()
  loading = false;

  @Input()
  submitLabel = 'Save';

  @Output()
  submitForm = new EventEmitter<void>();

  @Output()
  cancelSubmit = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  get roleAssignments(): FormArray {
    return this.form.get('roleAssignments') as FormArray;
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
    this.submitForm.emit();
  }
}
