import { Component } from '@angular/core';
import {
  VCLPopoverDirective,
  VCLButtonComponent,
  VCLIconComponent,
} from '@vcl/ng-vcl';

@Component({
  selector: 'rc-notification',
  imports: [VCLPopoverDirective, VCLButtonComponent, VCLIconComponent],
  template: `
    <div>
      <button
        vcl-button
        square
        class="transparent"
      >
        <vcl-icon
          class="scale155p"
          icon="mdi mdi-bell-outline"
        ></vcl-icon>
      </button>

      <div #profileTarget></div>
    </div>

    <ng-template
      vclPopover
      #popover="vclPopover"
      [target]="profileTarget"
      (afterClose)="popover.close()"
    >
      <div class="p-2">Popover is connected to the target</div>
    </ng-template>
  `,
  styles: [
    `
      .profile-trigger {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    `,
  ],
})
export class RcNotificationComponent {}
