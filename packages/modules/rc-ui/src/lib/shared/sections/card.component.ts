import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { VCLPanelModule } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-card',
  standalone: true,
  imports: [VCLPanelModule, NgClass],
  template: `
    <vcl-panel
      class="rs-card"
      [ngClass]="variant"
    >
      @if (title || hasHeaderContent) {
      <vcl-panel-header>
        <div class="row align-items-center justify-content-between">
          <div class="row align-items-center gap-1">
            @if (icon) {
            <vcl-icon
              [icon]="icon"
              class="mr-1"
            ></vcl-icon>
            }

            <div class="column">
              <div>{{ title }}</div>
              @if (subtitle) {
              <div>
                {{ subtitle }}
              </div>
              }
            </div>
          </div>

          <div class="row">
            <ng-content select="[rsCardHeaderActions]"></ng-content>
          </div>
        </div>

        <ng-content select="[rsCardHeader]"></ng-content>
      </vcl-panel-header>
      }

      <div class="rs-card__content">
        <ng-content></ng-content>
      </div>

      @if(showFooter) {
      <vcl-panel-footer>
        <div class="row align-items-center py-1">
          <ng-content select="[rsCardFooter]"></ng-content>
        </div>
      </vcl-panel-footer>
      }
    </vcl-panel>
  `,
})
export class RcCardComponent {
  @Input() title = '';

  @Input() subtitle?: string;

  @Input() icon?: string;

  @Input() variant?: string;

  @Input() forceFooter = false;

  get showFooter() {
    return this.forceFooter || true;
  }

  get hasHeaderContent() {
    return !!this.title;
  }
}
