import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-management-country',
  template: `
    <div>
      <h2>Country {{ id$ | async }}</h2>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private route: ActivatedRoute) {}
}
