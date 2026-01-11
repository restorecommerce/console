import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'rc-centered-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rs-centered-page row justify-center align-items-center w-100p">
      <div class="rs-centered-page__content w-100p">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      @use '@vcl/theme' as *;

      @debug 'breakpoint' $breakpoints;

      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
      }

      .rs-centered-page {
        min-height: 100vh;
      }

      @media (min-width: 900px) {
        .rs-centered-page__content {
          max-width: 60%;
        }
      }

      @media (min-width: 1200px) {
        .rs-centered-page__content {
          max-width: 30%;
        }
      }
    `,
  ],
})
export class RcCenteredPageComponent {}
