import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

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
  users: IUser[];
  timezones: ITimezone[];
  roles: IRole[];
  organizations: IOrganization[];
  roleAssociationsScopingInstances: IRoleAssociationScopingInstance[];
}

interface IRoleAssociationsSchemaOptions {
  roles: IRole[];
  organizations: IOrganization[];
  users: IUser[];
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  user: IUser | null = null;

  formOptions$ = combineLatest({
    user: this.iamFacade.selected$,
    locales: this.localeFacade.all$,
    timezones: this.timezoneFacade.all$,
    users: this.iamFacade.all$,
    roles: this.roleFacade.all$,
    rolesHash: this.roleFacade.entities$,
    usersHash: this.iamFacade.entities$,
    organizations: this.organizationFacade.all$,
    organizationsHash: this.organizationFacade.entities$,
    tempRoleAssociations: this.iamFacade.tempRoleAssociations$,
  }).pipe(
    map((data): IUserSchemaOptions => {
      const roleAssociationsScopingInstances =
        this.userService.getRoleAssociationsScopingInstances(
          [
            ...(data.user?.roleAssociations || []),
            ...data.tempRoleAssociations,
          ],
          data.rolesHash,
          data.organizationsHash,
          data.usersHash
        );

      const uniqueRoleAssociationsScopingInstances =
        roleAssociationsScopingInstances;

      return {
        locales: data.locales,
        organizations: data.organizations,
        roles: data.roles,
        users: data.users,
        timezones: data.timezones,
        user: data.user,
        roleAssociationsScopingInstances:
          uniqueRoleAssociationsScopingInstances,
      };
    })
  );

  userForm$ = new BehaviorSubject<FormGroup>(
    this.createUserForm({
      user: null,
      locales: [],
      timezones: [],
      roles: [],
      users: [],
      organizations: [],
      roleAssociationsScopingInstances: [],
    })
  );
  roleAssociationsSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildRoleAssociationsSchema({
      roles: [],
      organizations: [],
      users: [],
    })
  );

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private readonly iamFacade: IamFacade,
    private readonly localeFacade: LocaleFacade,
    private readonly timezoneFacade: TimezoneFacade,
    private readonly roleFacade: RoleFacade,
    private readonly organizationFacade: OrganizationFacade,
    private readonly userService: UserService
  ) {
    this.init();

    this.formOptions$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ({
          user,
          locales,
          timezones,
          roles,
          users,
          roleAssociationsScopingInstances,
          organizations,
        }) => {
          this.userForm$.next(
            this.createUserForm({
              user,
              locales,
              timezones,
              users,
              roles,
              organizations,
              roleAssociationsScopingInstances,
            })
          );
          this.roleAssociationsSchema$.next(
            this.buildRoleAssociationsSchema({
              roles,
              organizations,
              users,
            })
          );
        }
      );
  }

  init() {
    this.localeFacade.read({});
    this.timezoneFacade.read({});
    this.roleFacade.read({});
    this.organizationFacade.read({});
  }

  destroy() {
    this.userForm$.complete();
    this.roleAssociationsSchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  createUserForm({
    user,
    roleAssociationsScopingInstances,
  }: IUserSchemaOptions): FormGroup {
    const form = this.fb.group({
      firstName: [user?.firstName, [Validators.required]],
      lastName: [user?.lastName || '', [Validators.required]],
      name: [user?.name || '', [Validators.required]],
      email: [user?.email || '', [Validators.required, Validators.email]],
      active: [user?.active ?? true, []],
      invite: [false, []],
      ...(!user
        ? {
            password: [
              '',
              [
                Validators.required,
                Validators.pattern(
                  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
                ),
              ],
            ],
          }
        : {}),
      localeId: [user?.localeId || '', [Validators.required]],
      timezoneId: [user?.timezoneId || '', [Validators.required]],
      roleAssociations: [
        ...roleAssociationsScopingInstances.flatMap((rai) =>
          rai.scopingInstances?.map(
            (inst) => `${rai.role?.id}|${inst.instanceType}|${inst.instance.id}`
          )
        ),
      ],
    });

    const inviteControl = form.get('invite');
    const passwordControl = form.get('password');
    inviteControl?.valueChanges.subscribe((value) => {
      if (value) {
        passwordControl?.disable();
      } else {
        passwordControl?.enable();
      }
    });

    return form;
  }

  private buildRoleAssociationsSchema({
    roles,
    organizations,
    users,
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
                name: 'roleScopingInstanceType',
                label: 'Role scoping instance type',
                type: 'select',
                validators: [Validators.required],
                params: {
                  placeholder: 'Select role',
                  selectionMode: 'single',
                  clearable: true,
                  search: true,
                  options: [
                    {
                      label:
                        'urn:restorecommerce:acs:model:organization.Organization',
                      value:
                        'urn:restorecommerce:acs:model:organization.Organization',
                    },
                    {
                      label: 'urn:restorecommerce:acs:model:user.User',
                      value: 'urn:restorecommerce:acs:model:user.User',
                    },
                  ],
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
                visible: conditional(
                  [
                    'roleAssociationsArray',
                    'roleAssociationsObject',
                    'roleScopingInstanceType',
                  ],
                  (field) => {
                    console.log('*****field', field);
                    return !!field && field.value === 'scheduledInterval';
                  }
                ),
              },
              {
                name: 'user',
                label: 'User',
                type: 'select',
                validators: [Validators.required],
                params: {
                  placeholder: 'Select user',
                  selectionMode: 'single',
                  clearable: true,
                  search: true,
                  options: users.map((user) => ({
                    label: user.name,
                    value: user.id,
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
