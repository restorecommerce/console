import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  IamFacade,
  LocaleFacade,
  OrganizationFacade,
  RoleFacade,
  TimezoneFacade,
  UserService,
} from '@console-core/state';
import {
  ILocale,
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  ITimezone,
  IUser,
} from '@console-core/types';

interface IUserSchemaOptions {
  user: IUser | null;
  locales: ILocale[];
  timezones: ITimezone[];
  roles: IRole[];
  organizations: IOrganization[];
  roleAssociationsScopingInstances: IRoleAssociationScopingInstance[];
}

interface IRoleAssociationsSchemaOptions {
  roles: IRole[];
  organizations: IOrganization[];
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  user: IUser | null = null;

  userSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildUserSchema({
      user: null,
      locales: [],
      timezones: [],
      roles: [],
      organizations: [],
      roleAssociationsScopingInstances: [],
    })
  );
  roleAssociationsSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildRoleAssociationsSchema({
      roles: [],
      organizations: [],
    })
  );

  private destroy$ = new Subject<void>();

  constructor(
    private readonly iamFacade: IamFacade,
    private readonly localeFacade: LocaleFacade,
    private readonly timezoneFacade: TimezoneFacade,
    private readonly roleFacade: RoleFacade,
    private readonly organizationFacade: OrganizationFacade,
    private readonly userService: UserService
  ) {
    this.init();

    combineLatest({
      user: this.iamFacade.selected$,
      locales: this.localeFacade.all$,
      timezones: this.timezoneFacade.all$,
      roles: this.roleFacade.all$,
      rolesHash: this.roleFacade.entities$,
      organizations: this.organizationFacade.all$,
      organizationsHash: this.organizationFacade.entities$,
      tempRoleAssociations: this.iamFacade.tempRoleAssociations$,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ({
          user,
          locales,
          timezones,
          roles,
          rolesHash,
          organizations,
          organizationsHash,
          tempRoleAssociations,
        }) => {
          this.userSchema$.next(
            this.buildUserSchema({
              user,
              locales,
              timezones,
              roles,
              organizations,
              roleAssociationsScopingInstances:
                this.userService.getRoleAssociationsScopingInstances(
                  [...(user?.roleAssociations || []), ...tempRoleAssociations],
                  rolesHash,
                  organizationsHash
                ),
            })
          );
          this.roleAssociationsSchema$.next(
            this.buildRoleAssociationsSchema({
              roles,
              organizations,
            })
          );
        }
      );
  }

  init() {
    this.localeFacade.read({});
    this.timezoneFacade.read({});
    this.roleFacade.read({});
    this.organizationFacade.readParents({});
  }

  destroy() {
    this.userSchema$.complete();
    this.roleAssociationsSchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildUserSchema({
    user,
    locales,
    timezones,
    roleAssociationsScopingInstances,
  }: IUserSchemaOptions): VCLFormFieldSchemaRoot {
    const uniqueRoleAssociationsScopingInstancesObj =
      roleAssociationsScopingInstances.reduce((acc, item) => {
        const key = `${item.role?.id}|${item.organization?.id}`;
        if (!acc[key]) {
          acc[key] = item;
        }
        return acc;
      }, {} as Record<string, IRoleAssociationScopingInstance>);
    const uniqueRoleAssociationsScopingInstances = Object.values(
      uniqueRoleAssociationsScopingInstancesObj
    );
    return {
      type: 'form',
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          type: 'input',
          ...(user ? { defaultValue: user.firstName } : {}),
          validators: [],
          params: {},
          hints: [],
        },
        {
          name: 'lastName',
          label: 'Last name',
          type: 'input',
          ...(user ? { defaultValue: user.lastName } : {}),
          validators: [],
          params: {},
          hints: [],
        },
        {
          name: 'name',
          label: 'Username',
          type: 'input',
          ...(user ? { defaultValue: user.name } : {}),
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
          type: 'password-input',
          name: 'password',
          label: 'Password',
          params: {
            placeholder: 'Enter password',
          },
          validators: [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'Password is required',
            },
            {
              type: 'error',
              error: 'pattern',
              message: 'Password must...',
            },
            {
              type: 'error',
              error: 'pattern',
              message: '- At least 8 characters in length',
            },
            {
              type: 'error',
              error: 'pattern',
              message: '- Contain a lowercase letters',
            },
            {
              type: 'error',
              error: 'pattern',
              message: '- Contain a uppercase letters',
            },
            {
              type: 'error',
              error: 'pattern',
              message: '- Contain a number',
            },
            {
              type: 'error',
              error: 'pattern',
              message: '- Contain a special character',
            },
          ],
        },
        {
          name: 'email',
          label: 'Email',
          type: 'input',
          ...(user ? { defaultValue: user.email } : {}),
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
          name: 'active',
          label: 'Active',
          type: 'checkbox',
          ...(user ? { defaultValue: user.active } : { defaultValue: true }),
          validators: [],
          params: {},
          hints: [],
        },
        {
          name: 'localeId',
          label: 'Locale',
          type: 'select',
          ...(user ? { defaultValue: user.localeId } : {}),
          validators: [Validators.required],
          params: {
            options: locales.map((locale) => ({
              label: locale.value,
              sublabel: locale.description,
              value: locale.id,
            })),
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
          name: 'timezoneId',
          label: 'Timezone',
          type: 'select',
          ...(user ? { defaultValue: user.timezoneId } : {}),
          validators: [Validators.required],
          params: {
            options: timezones.map((timezone) => ({
              label: timezone.value,
              sublabel: timezone.description,
              value: timezone.id,
            })),
          },
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        ...(uniqueRoleAssociationsScopingInstances.length > 0
          ? [
              {
                type: 'select-list',
                name: 'roleAssociations',
                label: 'Roles',
                defaultValue: uniqueRoleAssociationsScopingInstances.map(
                  (rai) => `${rai.role?.id}|${rai.organization?.id}`
                ),
                params: {
                  placeholder: 'Select role',
                  selectionMode: 'multiple',
                  clearable: true,
                  search: false,
                  options: uniqueRoleAssociationsScopingInstances.map(
                    (rai) => ({
                      label: `${rai.role?.name ?? 'N/A'} [${
                        rai.organization?.name ?? 'N/A'
                      }]`,
                      sublabel: rai.role?.description ?? 'N/A',
                      value: `${rai.role?.id}|${rai.organization?.id}`,
                    })
                  ),
                },
              },
            ]
          : []),
        {
          type: 'buttons',
          buttons: [
            {
              type: 'button',
              label: 'Assign Roles',
              action: 'addRoleAssociations',
              class: 'transparent',
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
      ] as VCLFormFieldSchemaRoot['fields'],
    };
  }

  private buildRoleAssociationsSchema({
    roles,
    organizations,
  }: IRoleAssociationsSchemaOptions): VCLFormFieldSchemaRoot {
    return {
      type: 'form',
      fields: [
        {
          name: 'roleAssociationsArray',
          label: 'Add Role',
          type: 'array',
          fieldLabel: (index) => `Role ${index + 1}`,
          initialFields: 1,
          noFieldsLabel: 'No role associations',
          field: {
            name: 'roleAssociationsObject',
            type: 'object',
            fields: [
              {
                name: 'role',
                label: 'Role',
                type: 'select',
                validators: [Validators.required],
                params: {
                  placeholder: 'Select role',
                  selectionMode: 'single',
                  clearable: true,
                  search: true,
                  options: roles.map((r) => ({
                    label: r.name,
                    sublabel: r.description,
                    value: r.id,
                  })),
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
                name: 'organization',
                label: 'Organization',
                type: 'select',
                validators: [Validators.required],
                params: {
                  placeholder: 'Select organization',
                  selectionMode: 'single',
                  clearable: true,
                  search: true,
                  options: organizations.map((o) => ({
                    label: o.name,
                    value: o.id,
                  })),
                },
                hints: [
                  {
                    type: 'error',
                    error: 'required',
                    message: 'This field is required.',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'buttons',
          buttons: [
            {
              type: 'button',
              label: 'Cancel',
              action: 'close',
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
