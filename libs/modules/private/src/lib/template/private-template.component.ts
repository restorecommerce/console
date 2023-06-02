import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-private-template',
  template: `
    <!-- TODO: use rc-template-private here -->
    <!-- <rc-template-private> -->
    <router-outlet></router-outlet>
    <!-- </rc-template-private> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent {}
