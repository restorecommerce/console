import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { map, of } from 'rxjs';

import {
  VCLFormControlGroupModule,
  VCLIconComponent,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

import { IamFacade, OrganizationFacade, RoleFacade } from '@console-core/state';
import { IRoleAssociation } from '@console-core/types';

import { RoleAssociationForm } from './role-association.form';
import { fromFormValue, toFormValue } from './role-association.mapper';

@Component({
  selector: 'app-role-association-form',
  templateUrl: './role-association-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
      }

      .role-add,
      .role-remove {
        cursor: pointer;
      }

      .role-add {
        color: green;
      }

      .role-remove {
        color: red;
      }
    `,
  ],
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    VCLFormControlGroupModule,
    VCLSelectComponent,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    VCLIconComponent,
  ],
})
export class RoleAssociationFormComponent implements OnInit {
  form!: FormGroup;
  private fb = inject(FormBuilder);
  private readonly iamFacade = inject(IamFacade);
  private readonly roleFacade = inject(RoleFacade);
  private readonly organizationFacade = inject(OrganizationFacade);

  private formFactory = new RoleAssociationForm(this.fb);

  @Input() role: IRoleAssociation | undefined;

  @Output() roleAssociationSubmit = new EventEmitter<IRoleAssociation[]>();

  INSTANCE_TYPE_USER = 'urn:restorecommerce:acs:model:user.User';
  INSTANCE_TYPE_ORG = 'urn:restorecommerce:acs:model:organization.Organization';

  readonly roles$ = this.roleFacade.all$;
  readonly organizations$ = this.organizationFacade.all$.pipe(
    map((orgs) => orgs.map((org) => ({ label: org.name, value: org.id })))
  );
  readonly users$ = this.iamFacade.all$.pipe(
    map((users) => users.map((user) => ({ label: user.name, value: user.id })))
  );

  ngOnInit(): void {
    this.form = this.formFactory.create(
      this.role ? toFormValue(this.role) : undefined
    );
  }

  addTargetRow() {
    const fac = new RoleAssociationForm(this.fb);
    this.targets.push(fac.createTargetGroup());
  }

  removeTargetRow(i: number) {
    this.targets.removeAt(i);
    this.targets.updateValueAndValidity();
  }

  get targets(): FormArray {
    return this.form.get('targets') as FormArray;
  }

  onSubmit(): void {
    console.log('this.form.getRawValue()', this.form.getRawValue());
    console.log(
      'fromFormValue(this.form.getRawValue())',
      fromFormValue(this.form.getRawValue())
    );
    const value = this.form.getRawValue();

    console.log('value', fromFormValue(value));

    if (!this.form.valid) {
      return;
    }

    this.roleAssociationSubmit.next([fromFormValue(value)]);
  }

  getInstanceIdOptions(instanceType: string | null | undefined) {
    if (!instanceType) return of([]);

    if (instanceType === this.INSTANCE_TYPE_USER) {
      return this.users$;
    }

    if (instanceType === this.INSTANCE_TYPE_ORG) {
      return this.organizations$;
    }

    return of([]);
  }

  onInstanceTypeChange(index: number) {
    const group = this.targets.at(index);
    group.get('instanceId')?.reset('');
  }
}
