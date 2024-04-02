import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <vcl-progress-bar [value]="vm.value" />
    </ng-container>
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly vm$ = combineLatest({
    value: this.loadingBar.value$,
  });

  constructor(private readonly loadingBar: LoadingBarService) {}
}
