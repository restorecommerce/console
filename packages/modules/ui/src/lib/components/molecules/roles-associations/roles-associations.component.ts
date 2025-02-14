import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-user-role-association',
  templateUrl: './roles-associations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcRolesAssociationsComponent {
  @Input({ required: true })
  roles!: IIoRestorecommerceProductPhysicalVariant[];
  @Output() addRole = new EventEmitter<void>();

  @Output() editRole =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteRole = new EventEmitter<string>();
}
