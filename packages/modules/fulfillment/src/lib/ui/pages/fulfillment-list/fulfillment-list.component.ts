import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

import { FulfillmentListFacade } from '../../../store';
import { FulfillmentDataListItemComponent } from '../../components/fulfillment-data-list-item/fulfillment-data-list-item.component';

@Component({
  selector: 'app-module-fulfillment-list',
  templateUrl: './fulfillment-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FulfillmentListFacade],
  imports: [RcResourceListComponent, FulfillmentDataListItemComponent],
})
export class FulfillmentListComponent implements OnInit {
  private readonly fulfillmentFacade = inject(FulfillmentListFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  items = this.fulfillmentFacade.fulfillments;

  ngOnInit(): void {
    this.fulfillmentFacade.loadList();
  }

  onSelect(fulfillment: { id: string }): void {
    this.router.navigate([fulfillment.id, 'view'], {
      relativeTo: this.route,
    });
  }

  getId(item: { id: string }) {
    return item.id;
  }
}
