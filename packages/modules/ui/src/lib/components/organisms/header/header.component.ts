import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        padding: 0 0.6rem;
      }
    `,
  ],
  standalone: false,
})
export class RcHeaderComponent {
  @HostBinding('class.application-header')
  @HostBinding('class.row')
  @HostBinding('class.center')
  _hostClasses = true;
}
