import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { RoleFacade } from '@console-core/state';
import { IRole } from '@console-core/types';

interface ISchemaOptions {
  role: IRole | null;
  assignableByRoles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  role: IRole | null = null;
  assignableByRoles: string[] = [];

  roleSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildRoleSchema({ role: null, assignableByRoles: [] })
  );

  private destroy$ = new Subject<void>();

  constructor(private readonly roleFacade: RoleFacade) {
    this.init();
  }

  init() {
    combineLatest({
      role: this.roleFacade.selected$,
      assignableByRoles: this.roleFacade.allDistinctAssignableByRoles$,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ role, assignableByRoles }) => {
        this.roleSchema$.next(
          this.buildRoleSchema({ role, assignableByRoles })
        );
      });
  }

  destroy() {
    this.roleSchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildRoleSchema({
    role,
    assignableByRoles = [],
  }: ISchemaOptions): VCLFormFieldSchemaRoot {
    return {
      type: 'form',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'input',
          ...(role ? { defaultValue: role.name } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'description',
          label: 'Description',
          type: 'input',
          ...(role ? { defaultValue: role.description } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'assignableByRoles',
          label: 'Assignable by roles',
          type: 'select',
          ...(role ? { defaultValue: role.assignableByRoles || [] } : {}),
          validators: [Validators.required],
          params: {
            placeholder: 'Select assignable by roles',
            selectionMode: 'multiple',
            clearable: true,
            search: false,
            options: assignableByRoles
              .map((id) => ({ label: id.replace(/-r-id/g, ' '), value: id }))
              .sort((a, b) => a.label.localeCompare(b.label)),
          },
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          type: 'buttons',
          buttons: [
            {
              type: 'button',
              label: 'Cancel',
              action: 'reset',
              class: 'transparent',
            },
            {
              type: 'submit',
              label: 'Save',
            },
          ],
        },
      ],
    };
  }
}
