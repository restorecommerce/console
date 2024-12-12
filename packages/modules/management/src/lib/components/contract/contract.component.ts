import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-module-management-contract',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <p>Contract: {{ id }}</p>
      </ng-container>

      <ng-template #templateNoId>
        <p>Contracts</p>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ContractComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
