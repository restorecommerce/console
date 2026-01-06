import { Component } from '@angular/core';
import { VCLPopoverDirective } from '@vcl/ng-vcl';

@Component({
  selector: 'ui-profile-thumbnail',
  imports: [VCLPopoverDirective],
  template: `
    <div class="profile-trigger">
      <a
        href="https://i.pravatar.cc/80"
        (click)="$event.preventDefault(); popover.toggle()"
      >
        <img
          src="https://i.pravatar.cc/80"
          alt="User avatar"
          class="responsive-image img-shape-circular"
        />
      </a>

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
export class ProfileThumbnailComponent {}
