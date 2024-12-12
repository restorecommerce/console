import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-module-management-command',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>Command: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>Commands</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CommandComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
