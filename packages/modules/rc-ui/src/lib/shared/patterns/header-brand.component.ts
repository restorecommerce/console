import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rc-brand',
  template: `
    @if (logoUrl) {
    <a [routerLink]="logoLink">
      <img
        [alt]="brandName"
        [src]="logoUrl"
        class="responsive-image logo"
        role="presentation"
        width="100"
      />
    </a>
    } @if (showName) {
    <span class="app-name hide-to-sm">
      {{ brandName }}
    </span>
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

  @Input() showName = false;

  @Input()
  logoUrl?: string;

  @Input()
  logoLink?: string;
}
