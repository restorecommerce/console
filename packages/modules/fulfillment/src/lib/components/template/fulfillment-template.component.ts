import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  RcResourceListComponent,
  RcResourcePageLayoutComponent,
} from '@console/rc-ui';
import { combineLatest, map } from 'rxjs';

import { FulfillmentFacade } from '@console-core/state';

@Component({
  selector: 'app-module-fulfillment-template',
  templateUrl: './fulfillment-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RcResourceListComponent,
    RcResourcePageLayoutComponent,
    RcResourceListComponent,
  ],
})
export class FulfillmentTemplateComponent implements OnInit {
  private readonly fulfilmentFacade = inject(FulfillmentFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly vm$ = combineLatest({
    items: this.fulfilmentFacade.all$.pipe(
      map((fulfilments) => {
        return fulfilments.map((fulfilment) => ({
          id: fulfilment.id,
          state: fulfilment.fulfillmentState,
          createdAt: fulfilment.meta?.created,
        }));
      })
    ),
  });

  ngOnInit(): void {
    this.fulfilmentFacade.read({});
  }

  onSelect(fulfilment: { id: string }): void {
    // TODO Use the route constants here!
    this.router.navigate([fulfilment.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
