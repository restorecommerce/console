import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rs-brand',
  template: `
    @if (logoUrl) {
    <a [routerLink]="logoLink">
      <img
        [alt]="brandName"
        [src]="logoUrl"
        class="responsive-image logo"
        role="presentation"
        width="32"
        height="32"
      />
    </a>
    } @if (showName) {
    <h1 class="app-name hide-to-sm">
      {{ brandName }}
    </h1>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
})
export class RcBannerComponent {
  @HostBinding('class.row')
  @HostBinding('class.center')
  _hostClasses = true;

  @Input() brandName!: string;

  @Input() showName = true;

  @Input()
  logoUrl?: string;

  @Input()
  logoLink?: string;
}
