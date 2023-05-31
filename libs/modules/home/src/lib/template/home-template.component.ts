import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-home-template',
  template: `
    <h1>HomeTemplateComponent</h1>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplateComponent {}
