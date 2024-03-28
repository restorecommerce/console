import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-invoice-template',
  template: `
    <rc-page-layout>
      <router-outlet />
    </rc-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceTemplateComponent {}
