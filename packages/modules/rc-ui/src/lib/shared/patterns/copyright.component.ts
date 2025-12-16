import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rc-copyright',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="align-centered mt-5 rs-copyright">
      &copy; {{ year }} <a [routerLink]="['/']">{{ company }}</a> . {{ text }}
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
export class RcCopyrightComponent {
  @Input() year = new Date().getFullYear();

  @Input() company = 'RestoreCommerce';

  @Input() text = 'All rights reserved.';
}
