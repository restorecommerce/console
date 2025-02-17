import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';
import { IRoleAssociationScopingInstance } from '@console-core/types';

@Component({
  selector: 'rc-user-role-associations',
  templateUrl: './roles-associations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcRolesAssociationsComponent {
  @Input({ required: true })
  roles!: IRoleAssociationScopingInstance[];

  @Output() addRole = new EventEmitter<void>();

  @Output() editRole =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteRole = new EventEmitter<string>();
}
