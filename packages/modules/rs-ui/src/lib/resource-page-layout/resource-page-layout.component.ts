import { Component } from '@angular/core';

@Component({
  selector: 'rs-resource-page-layout',
  template: `
    <div class="row">
      <div class="flex-4-md flex-12">Side bar</div>
      <div class="flex-8-md flex-12">Content</div>
    </div>
  `,
})
export class RsResourcePageLayoutComponent {}
