import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rs-resource-page-layout',
  template: `
    <div
      class="flex-4-md flex-12"
      style="background-color: aqua;"
    >
      Side bar
    </div>
    <div
      class="flex-8-md flex-12"
      style="background-color: bisque;"
    >
      Content
    </div>
  `,
})
export class RsResourcePageLayoutComponent {
  @HostBinding('class') classes = 'row h-100p';
}
