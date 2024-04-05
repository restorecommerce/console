import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-module-management-address',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>Address: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>Addresses</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
