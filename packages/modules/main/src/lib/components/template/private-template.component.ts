import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <rc-private-template>
      <router-outlet></router-outlet>
    </rc-private-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent {}
