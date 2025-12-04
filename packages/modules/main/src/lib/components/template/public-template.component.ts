import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-module-main-public-template',
  template: ` <router-outlet /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
})
export class PublicTemplateComponent {}
