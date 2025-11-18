import {
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { IRoleAssociationFormValue } from './role-association.types';

export class RoleAssociationForm {
  constructor(private fb: FormBuilder) {}

  createTargetGroup(value?: { instanceType?: string; instanceId?: string }) {
    return this.fb.group({
      instanceType: [value?.instanceType ?? ''],
      instanceId: [value?.instanceId ?? ''],
    });
  }

  create(value?: Partial<IRoleAssociationFormValue>) {
    const targets = (
      value?.targets ?? [{ instanceType: '', instanceId: '' }]
    ).map((t) => this.createTargetGroup(t));

    return this.fb.group({
      role: [value?.role ?? '', Validators.required],
      targets: this.fb.array(targets, [atLeastOne, noDuplicatePairs]),
    });
  }
}

// --- Array validators ---
function atLeastOne(ctrl: AbstractControl): ValidationErrors | null {
  const arr = ctrl as FormArray;
  return arr.length > 0 ? null : { atLeastOne: true };
}

// Prevent duplicate (instanceType, instanceId) pairs
function noDuplicatePairs(ctrl: AbstractControl): ValidationErrors | null {
  const arr = ctrl as FormArray;
  const pairs = arr.controls.map((c) => {
    const v = c.value as { instanceType: string; instanceId: string };
    return `${v.instanceType}::${v.instanceId}`.trim();
  });
  const set = new Set(pairs);
  return set.size === pairs.length ? null : { duplicateTargets: true };
}
