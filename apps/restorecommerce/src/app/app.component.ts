import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    @if (vm$ | async; as vm) {
    <vcl-progress-bar
      [value]="vm.value"
      class="progress-bar"
    />
    }

    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent {
  private loadingBar = inject(LoadingBarService);

  readonly vm$ = combineLatest({
    value: this.loadingBar.value$,
  });
}
