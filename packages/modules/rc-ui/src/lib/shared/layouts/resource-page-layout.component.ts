import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'rc-resource-page-layout',
  template: `
    <div class="flex-4-md flex-12">
      <ng-content select="[rcResourceSidebar]"></ng-content>
    </div>
    <div class="flex-8-md flex-12 px-2">
      <ng-content select="[rcResourceContent]"></ng-content>
    </div>
  `,
})
export class RcResourcePageLayoutComponent {
  @HostBinding('class') classes = 'row h-100p';
}
