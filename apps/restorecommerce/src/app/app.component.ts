import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <ng-container *ngIf="vm$ | async as vm">
        <vcl-progress-bar
          [value]="vm.value"
          class="progress-bar"
        />
      </ng-container>
      <router-outlet />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent {
  readonly vm$ = combineLatest({
    value: this.loadingBar.value$,
  });

  constructor(private readonly loadingBar: LoadingBarService) {}
}
