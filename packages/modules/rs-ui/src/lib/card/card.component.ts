import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { VCLPanelModule } from '@vcl/ng-vcl';

@Component({
  selector: 'rs-card',
  standalone: true,
  imports: [CommonModule, VCLPanelModule],
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
              <div class="rs-card__title">{{ title }}</div>
              @if (subtitle) {
              <div class="rs-card__subtitle">
                {{ subtitle }}
              </div>
              }
            </div>
          </div>

          <div class="row rs-card__header-actions">
            <ng-content select="[rsCardHeaderActions]"></ng-content>
          </div>
        </div>

        <!-- If caller wants to completely override header, use this slot -->
        <ng-content select="[rsCardHeader]"></ng-content>
      </vcl-panel-header>
      }

      <div class="rs-card__content">
        <ng-content></ng-content>
      </div>

      @if(showFooter) {
      <vcl-panel-footer>
        <div class="row align-items-center py-1 rs-card__footer">
          <ng-content select="[rsCardFooter]"></ng-content>
        </div>
      </vcl-panel-footer>
      }
    </vcl-panel>
  `,
  styles: [
    `
      .rs-card {
        display: block;
      }

      .rs-card__title {
        font-weight: 600;
        font-size: 0.95rem;
      }

      .rs-card__subtitle {
        font-size: 0.8rem;
        opacity: 0.7;
      }

      .rs-card__footer {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .rs-card__header-actions :where(button, a) {
        margin-left: 0.25rem;
      }
    `,
  ],
})
export class RsCardComponent {
  @Input() title = '';

  @Input() subtitle?: string;

  @Input() icon?: string;

  /** Variant class, e.g. 'rs-card--danger', 'rs-card--success' etc. */
  @Input() variant?: string;

  @Input() forceFooter = false;

  get showFooter() {
    return this.forceFooter || true; // change later if you add detection
  }

  get hasHeaderContent() {
    return !!this.title;
  }
}
