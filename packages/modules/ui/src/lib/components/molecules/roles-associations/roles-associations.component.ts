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

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';
import { IRoleAssociationScopingInstance } from '@console-core/types';

@Component({
  selector: 'rc-user-role-associations',
  templateUrl: './roles-associations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcRolesAssociationsComponent implements OnInit {
  @Input({ required: true })
  roles!: IRoleAssociationScopingInstance[];

  roleAssociationLayer!: LayerRef;

  @Output() editRole =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteRole = new EventEmitter<string>();

  constructor(private readonly layerService: LayerService) {}

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
            // const roleAssociations = result.value.map((ra) => ({
            //   ...this.userService.createRoleAssociation(
            //     ra.role,
            //     ra.instanceType,
            //     ra.instanceId
            //   ),
            // }));
            // this.iamFacade.setTempRoleAssociations(roleAssociations);
          }
        }
      );
  }
}
