import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { IRoleAssociationScopingInstance } from '@console-core/types';

@Component({
  selector: 'rc-user-role-association',
  template: `
    <span>{{ role.role?.name }}</span>
    <span>{{
      role.scopingInstances && role.scopingInstances[0].instance.name
    }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcRoleAssociationComponent {
  @HostBinding('class') klasses =
    'row align-items-center justify-content-between w-100p pr-2';

  @Input({ required: true })
  role!: IRoleAssociationScopingInstance;

  @Output() editRole = new EventEmitter<IRoleAssociationScopingInstance>();

  @Output() deleteRole = new EventEmitter<IRoleAssociationScopingInstance>();
}
