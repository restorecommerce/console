import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-private-template',
  template: `
    <rc-private-template>
      <router-outlet></router-outlet>
    </rc-private-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent {}
