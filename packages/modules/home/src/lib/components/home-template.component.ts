import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-template',
  template: `
    <h3>HomeTemplateComponent</h3>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplateComponent {}
