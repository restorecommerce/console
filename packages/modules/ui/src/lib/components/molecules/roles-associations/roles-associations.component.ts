import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import _ from 'lodash';
import { IamRoleAssociationModalComponent } from 'packages/modules/management/src/lib/components/iam/role-association-modal.component';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
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
            const currentRoleAssociations = this.roles
              .flatMap((rai) =>
                rai.scopingInstances?.map((inst) => ({
                  role: rai.role?.id || '',
                  instanceType: inst.instanceType || '',
                  instanceId: inst.instance.id || '',
                }))
              )
              .map((ra) => ({
                ...this.userService.createRoleAssociation(
                  ra?.role || '',
                  ra?.instanceType || '',
                  ra?.instanceId || ''
                ),
              }));

            const newRoleAssociations = result.value.map((ra) => ({
              ...this.userService.createRoleAssociation(
                ra.role,
                ra.instanceType,
                ra.instanceId
              ),
            }));

            const roleAssociations = _.uniqWith(
              [...currentRoleAssociations, ...newRoleAssociations],
              _.isEqual
            );

            this.iamFacade.addRoleAssociation({
              items: [
                {
                  id: this.id,
                  roleAssociations,
                },
              ],
              mode: ModeType.Update,
            });
          }
        }
      );
  }

  onEditRole(role: IRoleAssociationScopingInstance) {
    this.roleAssociationLayer
      .open({
        data: {
          title: 'Assign Roles',
          role,
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
            // Let's assume a 1 to 1 relationship between role, and entity.
            const currentRoleAssociations = this.roles
              .flatMap((rai) =>
                rai.scopingInstances?.map((inst) => ({
                  role: rai.role?.id || '',
                  instanceType: inst.instanceType || '',
                  instanceId: inst.instance.id || '',
                }))
              )
              .map((ra) => ({
                ...this.userService.createRoleAssociation(
                  ra?.role || '',
                  ra?.instanceType || '',
                  ra?.instanceId || ''
                ),
              }));

            const flattendRole = [role]
              .flatMap((rai) =>
                rai.scopingInstances?.map((inst) => ({
                  role: rai.role?.id || '',
                  instanceType: inst.instanceType || '',
                  instanceId: inst.instance.id || '',
                }))
              )
              .map((ra) => ({
                ...this.userService.createRoleAssociation(
                  ra?.role || '',
                  ra?.instanceType || '',
                  ra?.instanceId || ''
                ),
              }));

            const newRoleAssociations = result.value.map((ra) => ({
              ...this.userService.createRoleAssociation(
                ra.role,
                ra.instanceType,
                ra.instanceId
              ),
            }));

            const editedRoleIndex = _.findIndex(
              currentRoleAssociations,
              (obj) => _.isEqual(obj, flattendRole[0])
            );

            if (editedRoleIndex > -1) {
              const updatedRoleAssociations = currentRoleAssociations.map(
                (ra, index) =>
                  index === editedRoleIndex ? newRoleAssociations[0] : ra
              );

              const roleAssociations = _.uniqWith(
                updatedRoleAssociations,
                _.isEqual
              );

              this.iamFacade.addRoleAssociation({
                items: [
                  {
                    id: this.id,
                    roleAssociations,
                  },
                ],
                mode: ModeType.Update,
              });
            }
          }
        }
      );
  }

  onDeleteRole(role: IRoleAssociationScopingInstance) {
    const currentRoleAssociations = this.roles
      .flatMap((rai) =>
        rai.scopingInstances?.map((inst) => ({
          role: rai.role?.id || '',
          instanceType: inst.instanceType || '',
          instanceId: inst.instance.id || '',
        }))
      )
      .map((ra) => ({
        ...this.userService.createRoleAssociation(
          ra?.role || '',
          ra?.instanceType || '',
          ra?.instanceId || ''
        ),
      }));

    const flattendRoleToDelete = [role]
      .flatMap((rai) =>
        rai.scopingInstances?.map((inst) => ({
          role: rai.role?.id || '',
          instanceType: inst.instanceType || '',
          instanceId: inst.instance.id || '',
        }))
      )
      .map((ra) => ({
        ...this.userService.createRoleAssociation(
          ra?.role || '',
          ra?.instanceType || '',
          ra?.instanceId || ''
        ),
      }));

    const roleAssociations = _.differenceWith(
      currentRoleAssociations,
      flattendRoleToDelete,
      _.isEqual
    );

    this.iamFacade.addRoleAssociation({
      items: [
        {
          id: this.id,
          roleAssociations,
        },
      ],
      mode: ModeType.Update,
    });
  }
}
