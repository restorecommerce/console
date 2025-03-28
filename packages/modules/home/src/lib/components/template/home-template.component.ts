import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-home-template',
  template: `
    <rc-page-home>
      <router-outlet />
    </rc-page-home>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HomeTemplateComponent {}
