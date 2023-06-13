import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-ui-template-private name="Restorecommerce Console">
      <router-outlet></router-outlet>
    </app-ui-template-private>
  `,
  styles: [],
})
export class AppComponent {
  title = 'restorecommerce';
}
