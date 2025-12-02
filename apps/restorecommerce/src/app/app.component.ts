import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  template: ` <button (click)="switch('en')">EN</button>
    <button (click)="switch('de')">DE</button>

    <h1>{{ 'rs-ui.header.welcome' | translate : { name } }}</h1>
    <router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent {
  name = 'babakolo';

  private translate = inject(TranslateService);

  switch(lang: string) {
    this.translate.use(lang);
  }
}
