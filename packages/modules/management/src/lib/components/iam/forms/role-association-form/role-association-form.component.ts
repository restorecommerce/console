import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { map, of } from 'rxjs';

import { IamFacade, OrganizationFacade, RoleFacade } from '@console-core/state';
import { IRoleAssociation, IRoleInstance } from '@console-core/types';

import { RoleAssociationForm } from './role-association.form';
import { fromFormValue, toFormValue } from './role-association.mapper';
import { IRoleAssociationFormValue } from './role-association.types';

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
  standalone: false,
})
export class RoleAssociationFormComponent {
  userId!: string;
  @Input() role: IRoleInstance | undefined;

  @Output() roleAssociationSubmit = new EventEmitter<
    { role: string; instanceType: string; instanceId: string }[]
  >();

  INSTANCE_TYPE_USER = 'urn:restorecommerce:acs:model:user.User';
  INSTANCE_TYPE_ORG = 'urn:restorecommerce:acs:model:organization.Organization';

  readonly roles$ = this.roleFacade.all$;
  readonly organizations$ = this.organizationFacade.all$.pipe(
    map((orgs) => orgs.map((org) => ({ label: org.name, value: org.id })))
  );
  readonly users$ = this.iamFacade.all$.pipe(
    map((users) => users.map((user) => ({ label: user.name, value: user.id })))
  );

  constructor(
    private fb: FormBuilder,
    private readonly iamFacade: IamFacade,
    private readonly roleFacade: RoleFacade,
    private readonly organizationFacade: OrganizationFacade
  ) {}

  roleAssociations: IRoleAssociation[] = [];

  // form & edit state
  form = new RoleAssociationForm(this.fb).create();
  editIndex: number | null = null;

  addTargetRow() {
    const fac = new RoleAssociationForm(this.fb);
    this.targets.push(fac.createTargetGroup());
  }

  removeTargetRow(i: number) {
    this.targets.removeAt(i);
    this.targets.updateValueAndValidity();
  }

  // --- Add ---
  startAdd() {
    const fac = new RoleAssociationForm(this.fb);
    this.form = fac.create(); // empty
    this.editIndex = null;
    // open modal…
  }

  // --- Edit ---
  startEdit(index: number) {
    const assoc = this.roleAssociations[index];
    const fac = new RoleAssociationForm(this.fb);
    this.form = fac.create(toFormValue(assoc));
    this.editIndex = index;
    // open modal…
  }

  get targets(): FormArray {
    return this.form.get('targets') as FormArray;
  }

  onSubmit(): void {
    const value = this.form.getRawValue() as IRoleAssociationFormValue;

    if (this.editIndex == null) {
      // ADD
      const newAssoc = fromFormValue(value);
      this.roleAssociations = [...this.roleAssociations, newAssoc];
    } else {
      // EDIT (preserve possible id on the existing entry)
      const existing = this.roleAssociations[this.editIndex];
      const edited = fromFormValue(value, existing?.id);
      this.roleAssociations = this.roleAssociations.map((a, i) =>
        i === this.editIndex ? edited : a
      );
      this.editIndex = null;
    }

    // Submit to backend
    this.iamFacade.update({
      items: [{ id: this.userId, roleAssociations: this.roleAssociations }],
    });

    // close modal…
  }

  getInstanceIdOptions(instanceType: string | null | undefined) {
    console.log('***Organization#instanceType:', instanceType);
    if (!instanceType) return of([]);

    if (instanceType === this.INSTANCE_TYPE_USER) {
      return this.users$;
    }

    if (instanceType === this.INSTANCE_TYPE_ORG) {
      console.log('Organization selected');
      return this.organizations$;
    }

    return of([]);
  }

  // onInstanceTypeChange(index: number) {
  //   const group = this.targets.at(index);
  //   group.get('instanceId')!.reset('');
  // }
}
