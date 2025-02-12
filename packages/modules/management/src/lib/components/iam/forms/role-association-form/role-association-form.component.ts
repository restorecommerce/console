import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
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

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    }
  }
}
