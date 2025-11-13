import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IamFacade, OrganizationFacade, RoleFacade } from '@console-core/state';
import { IRoleInstance } from '@console-core/types';

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
export class RoleAssociationFormComponent implements OnInit {
  form!: FormGroup;

  @Input() role: IRoleInstance | undefined;

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
  ) {}

  ngOnInit(): void {
    const EMPTY_ASSOC = { role: '', instanceType: '', instanceId: '' } as const;

    const assoc = this.role ?? EMPTY_ASSOC;

    this.form = this.fb.group({
      associations: this.fb.array([
        this.createUser({
          role: assoc.role,
          instanceType: assoc.instanceType,
          instanceId: assoc.instanceId,
        }),
      ]),
    });
  }

  get associations(): FormArray {
    return this.form.get('associations') as FormArray;
  }

  createUser(roleData: {
    role: string;
    instanceType: string;
    instanceId: string;
  }): FormGroup {
    return this.fb.group({
      role: [roleData.role || '', Validators.required],
      instanceType: [roleData.instanceType || '', [Validators.required]],
      instanceId: [roleData.instanceId || '', [Validators.required]],
    });
  }

  addUser(): void {
    this.associations.push(
      this.createUser({
        role: '',
        instanceType: '',
        instanceId: '',
      })
    );
  }

  removeUser(index: number): void {
    this.associations.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.roleAssociationSubmit.emit(
        this.form.value.associations as IRoleInstance[]
      );
    }
  }
}
