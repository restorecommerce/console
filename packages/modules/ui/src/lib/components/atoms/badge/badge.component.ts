import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-badge',
  template: `<vcl-badge [type]="type">{{ label }}</vcl-badge> `,
  styles: [``],
  standalone: false,
})
export class RCBadgeComponent {
  @Input() label = '';
  @Input() type:
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | undefined = 'primary';
}
