import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-layout-template',
  template: `
    <rc-page-layout>
      <router-outlet />
    </rc-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LayoutTemplateComponent {}
