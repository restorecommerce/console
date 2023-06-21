import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-template',
  template: `
    <h3>ProfileTemplateComponent</h3>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTemplateComponent {}
