import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { JssFormComponent, LayerRef, LayerService } from '@vcl/ng-vcl';

import { IamFacade, UserService } from '@console-core/state';

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
          [update]="create"
          (addRole)="handleActionEvent()"
        />
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
    this.jssFormService.userForm$,
    this.jssFormService.formOptions$,
    this.jssFormService.roleAssociationsSchema$,
  ]).pipe(
    map(([_, form, options, roleAssociationsSchema]) => {
      return {
        userCreationForm: form,
        options: {
          user: options.user,
          locales: options.locales,
          timezones: options.timezones,
          uniqueRoleAssociationsScopingInstances:
            options.roleAssociationsScopingInstances,
        },
        roleAssociationsSchema,
      };
    })
  );

  constructor(
    private readonly layerService: LayerService,
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

  handleActionEvent(): void {
    this.roleAssociationLayer
      .open({
        data: {
          title: 'Assign Roles',
        },
      })
      .subscribe(
        (result: {
          value: {
            role: 'administrator-r-id';
            instanceType: 'urn:restorecommerce:acs:model:organization.Organization';
            instanceId: 'nfuse-root-organization';
          }[];
        }) => {
          if (result) {
            const roleAssociations = result.value.map((ra) => ({
              ...this.userService.createRoleAssociation(
                ra.role,
                ra.instanceType,
                ra.instanceId
              ),
            }));

            this.iamFacade.setTempRoleAssociations(roleAssociations);
          }
        }
      );
  }
}
