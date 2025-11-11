import { ConnectedPosition } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LayerRef } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

@Component({
  selector: 'app-user-role-table',
  templateUrl: './roles-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RolesTableComponent {
  @Input({ required: true }) user!: IUser;

  roleAssociationLayer!: LayerRef;

  roleMenuItems = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete', danger: true },
  ];

  positions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
  ];

  onRoleMenu(option: string) {
    if (option === 'edit') {
      // this.openRoleAssociationComponent();
    } else if (option === 'delete') {
      console.log('***delete', option);
    }
  }
}
