import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { REGEX } from '@console-core/config';
import { OrganizationFacade } from '@console-core/state';
import { IOrganization } from '@console-core/types';

interface ISchemaOptions {
  organization: IOrganization | null;
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  organization: IOrganization | null = null;

  organizationSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildOrganizationSchema({ organization: null })
  );

  private destroy$ = new Subject<void>();

  constructor(private readonly organizationFacade: OrganizationFacade) {
    this.init();
  }

  init() {
    combineLatest({
      organization: this.organizationFacade.selected$,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ organization }) => {
        this.organizationSchema$.next(
          this.buildOrganizationSchema({ organization })
        );
      });
  }

  destroy() {
    this.organizationSchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  buildOrganizationSchema({
    organization,
  }: ISchemaOptions): VCLFormFieldSchemaRoot {
    return {
      type: 'form',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'input',
          ...(organization ? { defaultValue: organization.name } : {}),
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
          name: 'email',
          label: 'Email',
          type: 'input',
          ...(organization ? { defaultValue: organization.email } : {}),
          validators: [Validators.required, Validators.email],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
            {
              type: 'error',
              error: 'email',
              message: 'This field should be a valid email address.',
            },
          ],
        },
        {
          name: 'website',
          label: 'Website',
          type: 'input',
          ...(organization ? { defaultValue: organization.website } : {}),
          validators: [Validators.required, Validators.pattern(REGEX.url)],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
            {
              type: 'error',
              error: 'pattern',
              message: 'This field should be a valid URL.',
            },
          ],
        },
        {
          name: 'vatId',
          label: 'VAT identification number',
          type: 'input',
          ...(organization ? { defaultValue: organization.vatId } : {}),
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
