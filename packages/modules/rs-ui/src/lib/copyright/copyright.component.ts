import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-copyright',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="align-centered mt-5 rs-copyright">
      &copy; {{ year }} {{ company }}. {{ text }}
    </div>
  `,
  styles: [
    `
      .rs-copyright {
        font-size: 0.8rem;
        opacity: 0.75;
      }
    `,
  ],
})
export class RsCopyrightComponent {
  @Input() year = new Date().getFullYear();

  @Input() company = 'RestoreCommerce';

  @Input() text = 'All rights reserved.';
}
