import { FormBuilder, Validators } from '@angular/forms';

export function createUserForm(fb: FormBuilder) {
  const generatedId = crypto.randomUUID();

  const form = fb.group({
    id: [generatedId, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(40)],
    ],
    invite: [false],
    password: [''],
    defaultScope: [''],
    roleAssignments: fb.array([]),
  });

  return form;
}

export function createRoleAssignmentGroup(fb: FormBuilder) {
  return fb.group({
    role: ['', Validators.required],
    scopeInstance: ['', Validators.required],
  });
}
