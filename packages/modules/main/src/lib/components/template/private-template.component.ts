import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RcLayoutShellComponent } from '@console/rc-ui';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <rc-layout-shell>
      <router-outlet />
    </rc-layout-shell>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RcLayoutShellComponent],
})
export class PrivateTemplateComponent {}
