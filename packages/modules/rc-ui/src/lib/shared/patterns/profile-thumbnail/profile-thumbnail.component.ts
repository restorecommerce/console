import { Component, Input } from '@angular/core';
import { VCLPopoverDirective } from '@vcl/ng-vcl';

@Component({
  selector: 'ui-profile-thumbnail',
  imports: [VCLPopoverDirective],
  template: `
    <button
      #profileTarget
      vcl-button
      square
      class="profile-trigger transparent"
      (click)="popover.toggle()"
      (keydown.enter)="popover.toggle()"
      (keydown.space)="popover.toggle()"
      aria-haspopup="menu"
      aria-label="User menu"
    >
      <img
        [src]="avatarUrl"
        alt="User avatar"
        class="responsive-image img-shape-circular"
      />
    </button>

    <!-- Popover -->
    <ng-template
      vclPopover
      #popover="vclPopover"
      [target]="profileTarget"
      [closeOnOffClick]="true"
    >
      <div
        class="profile-popover"
        role="menu"
      >
        <ng-content></ng-content>
      </div>
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
export class RcProfileThumbnailComponent {
  @Input() avatarUrl = 'https://i.pravatar.cc/80';
}
