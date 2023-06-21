import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-public-template',
  template: ` <router-outlet></router-outlet> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicTemplateComponent {}
