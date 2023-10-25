import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-iam',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>User: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>IAM</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
