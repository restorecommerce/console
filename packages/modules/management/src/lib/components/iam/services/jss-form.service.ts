import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import {
  IamFacade,
  LocaleFacade,
  OrganizationFacade,
  RoleFacade,
  TimezoneFacade,
  UserService,
} from '@console-core/state';
import {
  ESortOrder,
  ILocale,
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  ITimezone,
  IUser,
} from '@console-core/types';

import { zxcvbnMinScoreValidator } from '../validators';

interface IUserSchemaOptions {
  user: IUser | null;
  locales: ILocale[];
  users: IUser[];
  timezones: ITimezone[];
  roles: IRole[];
  organizations: IOrganization[];
  roleAssociationsScopingInstances: IRoleAssociationScopingInstance[];
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
        }
      );
  }

  init() {
    this.localeFacade.read({
      sorts: [
        {
          field: 'name',
          order: ESortOrder.Ascending,
        },
      ],
    });
    this.timezoneFacade.read({
      sorts: [
        {
          field: 'name',
          order: ESortOrder.Ascending,
        },
      ],
    });
    this.roleFacade.read({});
    this.organizationFacade.read({});
  }

  destroy() {
    this.userForm$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  createUserForm({ user }: IUserSchemaOptions): FormGroup {
    const form = this.fb.group({
      firstName: [user?.firstName, [Validators.required]],
      lastName: [user?.lastName || '', [Validators.required]],
      name: [user?.name || '', [Validators.required, Validators.minLength(8)]],
      email: [user?.email || '', [Validators.required, Validators.email]],
      active: [user?.active ?? true, []],
      invite: [false, []],
      ...(!user
        ? {
            password: [
              '',
              {
                validators: [Validators.required, Validators.minLength(12)],
                asyncValidators: [zxcvbnMinScoreValidator(3)],
                updateOn: 'blur',
              },
            ],
          }
        : {}),
      localeId: [user?.localeId || '', [Validators.required]],
      timezoneId: [user?.timezoneId || '', [Validators.required]],
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
}
