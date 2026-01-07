import { Component, Input } from '@angular/core';
import { VCLButtonComponent, VCLPopoverDirective } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-profile-thumbnail',
  imports: [VCLPopoverDirective, VCLButtonComponent],
  template: `
    <span #profileTarget>
      <button
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
    </span>

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
