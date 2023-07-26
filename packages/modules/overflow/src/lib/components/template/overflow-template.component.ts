import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-template',
  template: `
    <rc-page-overflow>
      <router-outlet />
    </rc-page-overflow>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverflowTemplateComponent {}
