import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, map } from 'rxjs';

import {
  JssFormComponent,
  LayerRef,
  LayerService,
  VCLFormFieldSchemaRoot,
} from '@vcl/ng-vcl';

import { IamFacade, UserService } from '@console-core/state';
import { IRoleAssociationScopingInstance } from '@console-core/types';

import { IamRoleAssociationModalComponent } from './role-association-modal.component';
import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <app-user-creation-form
          [schema]="vm.userCreationForm"
          [options]="vm.options"
        />

        <!-- [create]="create" -->
        <!-- <button (click)="handleActionEvent(vm.roleAssociationsSchema)">
          Add Role X2
        </button> -->
      </div>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamCreateComponent implements OnInit, OnDestroy {
  @ViewChild('roleAssociationsForm')
  roleAssociationsForm!: JssFormComponent;

  roleAssociationLayer!: LayerRef;

  create = this.iamFacade.create;

  readonly vm$ = combineLatest([
    this.iamFacade.selected$,
    this.jssFormService.formOptions$,
  ]).pipe(
    map(([_, options]) => {
      const roleAssociationsScopingInstances =
        this.userService.getRoleAssociationsScopingInstances(
          [
            ...(options.user?.roleAssociations || []),
            ...options.tempRoleAssociations,
          ],
          options.rolesHash,
          options.organizationsHash
        );

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
        userCreationForm: this.jssFormService.createUserForm({
          user: null,
          uniqueRoleAssociationsScopingInstances,
        }),
        options: {
          locales: options.locales,
          timezones: options.timezones,
          uniqueRoleAssociationsScopingInstances,
        },
      };
    })
  );

  constructor(
    private readonly layerService: LayerService,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly iamFacade: IamFacade,
    private readonly userService: UserService,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnInit(): void {
    this.roleAssociationLayer = this.layerService.create(
      IamRoleAssociationModalComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  ngOnDestroy(): void {
    this.jssFormService.destroy();
    this.iamFacade.setTempRoleAssociations([]);
  }

  handleActionEvent(roleAssociationsSchema: VCLFormFieldSchemaRoot): void {
    this.roleAssociationLayer
      .open({
        data: {
          title: 'Assign Roles',
          roleAssociationsSchema,
        },
      })
      .subscribe((result: { role: string; organization: string }[]) => {
        const roleAssociations = result.map((ra) => ({
          ...this.userService.createRoleAssociation(ra.role, ra.organization),
        }));

        this.iamFacade.setTempRoleAssociations(roleAssociations);
      });
  }
}
