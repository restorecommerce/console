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
  selector: 'app-user-role-association',
  template: `
    <div class="flex row align-items-center justify-content-between">
      <span>{{ role.role?.name }}</span>
      <span>{{ role.scopingInstances?.[0]?.instance?.name || '—' }}</span>
    </div>

    <div #target>
      <button
        vcl-button
        square
        class="emphasized-transparent"
        title="Options"
        (click)="popover.open()"
      >
        <vcl-icon
          class="scale155p"
          icon="mdi mdi-dots-vertical"
        />
      </button>
    </div>

    <ng-template
      vclPopover
      #popover="vclPopover"
      [closeOnOffClick]="true"
      [target]="target"
      [positions]="[
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top'
        }
      ]"
    >
      <div>
        <vcl-button-group class="vertical">
          <button
            vcl-button
            class="transparent"
            (click)="editRole.emit(role); popover.close()"
          >
            Edit
          </button>
          <button
            class="transparent"
            vcl-button
            [value]="2"
            (click)="deleteRole.emit(role); popover.close()"
          >
            Delete
          </button>
        </vcl-button-group>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RoleAssociationComponent {
  @HostBinding('class') klasses =
    'row align-items-center justify-content-between w-100p';

  @Input({ required: true })
  role!: IRoleAssociationScopingInstance;

  @Output() editRole = new EventEmitter<IRoleAssociationScopingInstance>();

  @Output() deleteRole = new EventEmitter<IRoleAssociationScopingInstance>();
}
