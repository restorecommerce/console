import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-order-template',
  template: `
    <rc-page-layout>
      <router-outlet />
    </rc-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTemplateComponent {}
