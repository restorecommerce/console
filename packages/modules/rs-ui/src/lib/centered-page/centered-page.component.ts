// rs-centered-page.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'rs-centered-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="rs-centered-page row justify-center align-items-center p-5 w-100p"
    >
      <div class="rs-centered-page__content w-100p">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
      }

      .rs-centered-page {
        min-height: 100vh;
      }

      .rs-centered-page__content {
        max-width: 480px;
      }
    `,
  ],
})
export class RsCenteredPageComponent {}
