import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-module-drawer-location',
  template: `
    <div>
      <h2>Location {{ id$ | async }}</h2>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(private route: ActivatedRoute) {}
}
