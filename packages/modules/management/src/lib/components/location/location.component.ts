import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-location',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <h2>Location: {{ id }}</h2>
      </ng-container>

      <ng-template #templateNoId>
        <h2>Locations</h2>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private route: ActivatedRoute) {}
}
