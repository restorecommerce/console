import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-module-order-edit',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderEditComponent {
  @HostBinding('class') classNames = 'col w-100p h-100p';
}
