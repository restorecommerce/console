import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rs-resource-page-layout',
  template: `
    <div class="flex-4-md flex-12">
      <ng-content select="[rsResourceSidebar]"></ng-content>
    </div>
    <div class="flex-8-md flex-12">
      <ng-content select="[rsResourceContent]"></ng-content>
    </div>
  `,
})
export class RsResourcePageLayoutComponent {
  @HostBinding('class') classes = 'row h-100p';
}
