import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-contact-point',
  template: `
    <div>
      <ng-container *ngIf="id$ | async as id; else templateNoId">
        <h2>Contact Point: {{ id }}</h2>
      </ng-container>

      <ng-template #templateNoId>
        <h2>Contact Points</h2>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPointComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private readonly route: ActivatedRoute) {}
}
