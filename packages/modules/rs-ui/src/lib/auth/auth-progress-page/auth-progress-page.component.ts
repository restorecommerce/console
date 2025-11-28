import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VCLSpinnerModule } from '@vcl/ng-vcl';

import { RsCenteredPageComponent } from '../../centered-page/centered-page.component';

@Component({
  selector: 'rs-auth-progress-page',
  template: ` <rs-centered-page>
    <div class="align-centered">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <vcl-spinner></vcl-spinner>
    </div>
  </rs-centered-page>`,
  imports: [RsCenteredPageComponent, VCLSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsAuthProgressPageComponent {
  @Input() title = 'Signing out';
  @Input() message = 'Please wait...';
}
