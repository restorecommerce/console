import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-module-management-location',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>Location: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>Locations</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
