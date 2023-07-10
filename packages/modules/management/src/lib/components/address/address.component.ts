import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-address',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <h2>Address: {{ id }}</h2>
      </ng-container>

      <ng-template #templateNoId>
        <h2>Addresses</h2>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
