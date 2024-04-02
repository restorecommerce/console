import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-module-management-access-control-role',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>Role: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>Roles</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
