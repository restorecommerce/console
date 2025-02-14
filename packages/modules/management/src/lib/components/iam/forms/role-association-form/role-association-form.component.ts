import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IamFacade, OrganizationFacade, RoleFacade } from '@console-core/state';

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
  form!: FormGroup;

  @Output() roleAssociationSubmit = new EventEmitter<
    { role: string; instanceType: string; instanceId: string }[]
  >();

  readonly roles$ = this.roleFacade.all$;
  readonly organizations$ = this.organizationFacade.all$;
  readonly users$ = this.iamFacade.all$;

  constructor(
    private fb: FormBuilder,
    private readonly iamFacade: IamFacade,
    private readonly roleFacade: RoleFacade,
    private readonly organizationFacade: OrganizationFacade
  ) {
    this.form = this.fb.group({
      associations: this.fb.array([this.createUser()]),
    });
  }

  get associations(): FormArray {
    return this.form.get('associations') as FormArray;
  }

  createUser(): FormGroup {
    return this.fb.group({
      role: ['', Validators.required],
      instanceType: ['', [Validators.required]],
      instanceId: ['', [Validators.required]],
    });
  }

  addUser(): void {
    this.associations.push(this.createUser());
  }

  removeUser(index: number): void {
    this.associations.removeAt(index);
  }

  // TODO Fix (DRY) out these role assocaitions types...
  onSubmit(): void {
    if (this.form.valid) {
      this.roleAssociationSubmit.emit(
        this.form.value.associations as {
          role: string;
          instanceType: string;
          instanceId: string;
        }[]
      );
    }
  }
}
