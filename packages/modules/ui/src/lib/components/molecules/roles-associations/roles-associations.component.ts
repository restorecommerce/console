import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IamRoleAssociationModalComponent } from 'packages/modules/management/src/lib/components/iam/role-association-modal.component';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import {
  IIoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import { IamFacade, UserService } from '@console-core/state';
import { IRoleAssociationScopingInstance } from '@console-core/types';

@Component({
  selector: 'rc-user-role-associations',
  templateUrl: './roles-associations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcRolesAssociationsComponent implements OnInit {
  @Input({ required: true }) id!: string;

  @Input({ required: true })
  roles!: IRoleAssociationScopingInstance[];

  roleAssociationLayer!: LayerRef;

  @Output() editRole =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteRole = new EventEmitter<string>();

  constructor(
    private readonly layerService: LayerService,
    private readonly userService: UserService,
    private readonly iamFacade: IamFacade
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

  onAddRole() {
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
            // TODO Flaten the role association first!, then do the mapping....
            // const currentRoleAssociations = this.roles.map((ra) => ({
            //   ...this.userService.createRoleAssociation(
            //     ra.role,
            //     ra,
            //     ra.instanceId
            //   ),
            // }));

            const newRoleAssociations = result.value.map((ra) => ({
              ...this.userService.createRoleAssociation(
                ra.role,
                ra.instanceType,
                ra.instanceId
              ),
            }));

            this.iamFacade.addRoleAssociation({
              items: [
                {
                  id: this.id,
                  roleAssociations: [...newRoleAssociations],
                },
              ],
              mode: ModeType.Update,
            });
          }
        }
      );
  }
}
