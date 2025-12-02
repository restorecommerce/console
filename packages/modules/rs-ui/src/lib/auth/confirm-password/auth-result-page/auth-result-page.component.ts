import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotificationType, VCLNotificationModule } from '@vcl/ng-vcl';

import { RsAuthPageComponent } from '../auth-page/auth-page.component';

@Component({
  selector: 'rs-auth-result-page',
  standalone: true,
  imports: [RouterModule, VCLNotificationModule, RsAuthPageComponent],
  template: `
    <rs-auth-page>
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>

      @if (secondaryDescription) {
      <p>
        {{ secondaryDescription }}
      </p>
      } @if (!isRequesting) { @if (error) {
      <vcl-notification [type]="notificationType.Error">
        {{ errorMessage }}
      </vcl-notification>
      } @else {
      <vcl-notification [type]="notificationType.Success">
        {{ successMessage }}
        @if (signInLink) { You may now
        <a [routerLink]="signInLink">sign in</a>. }
      </vcl-notification>
      } }
    </rs-auth-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsAuthResultPageComponent {
  @Input() isRequesting: boolean | null = false;
  @Input() error: unknown = null;
  @Input() signInLink: string | null = null;

  @Input() title = 'Account Activation';
  @Input() description =
    `Thank you for activating your account! We're processing your request ` +
    `now and will have your account ready for use as soon as possible.`;
  @Input() secondaryDescription =
    'Please be patient while we complete the activation process.';
  @Input() errorMessage =
    'There was an error activating your account. Please try again later.';
  @Input() successMessage = 'Your account has been activated.';

  notificationType = NotificationType;
}
