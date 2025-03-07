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
import {
  IRoleAssociationScopingInstance,
  IRoleInstance,
} from '@console-core/types';

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

  @Input() role: IRoleAssociationScopingInstance | undefined;

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
    if (this.role) {
      const flattendRoleAssociationValues = [this.role]
        .flatMap((rai) =>
          rai.scopingInstances?.map((inst) => ({
            role: rai.role?.id || '',
            instanceType: inst.instanceType || '',
            instanceId: inst.instance.id || '',
          }))
        )
        .map((ra) =>
          this.createUser({
            role: ra?.role || '',
            instanceType: ra?.instanceType || '',
            instanceId: ra?.instanceId || '',
          })
        );

      this.form = this.fb.group({
        associations: this.fb.array(flattendRoleAssociationValues),
      });
    } else {
      this.form = this.fb.group({
        associations: this.fb.array([
          this.createUser({
            role: '',
            instanceType: '',
            instanceId: '',
          }),
        ]),
      });
    }
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
