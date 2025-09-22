import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-heading-1',
  template: `<ng-content></ng-content>`,
  standalone: false,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class RCHeading1Component {
  @HostBinding('class') classes = 'rc-lv-l-heading mb-2';
}
