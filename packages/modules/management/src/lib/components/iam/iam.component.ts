import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-iam',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <h2>User: {{ id }}</h2>
      </ng-container>

      <ng-template #templateNoId>
        <h2>IAM</h2>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
