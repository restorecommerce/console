import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RcResourceListComponent } from '@console/rc-ui';

// import { FulfillmentListFacade } from '../../../store';

@Component({
  selector: 'app-module-iam-user-list',
  templateUrl: './iam-user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [RcResourceListComponent],
})
export class FulfillmentListComponent implements OnInit {
  // private readonly fulfillmentFacade = inject(FulfillmentListFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  items = []; // this.fulfillmentFacade.fulfillments;

  ngOnInit(): void {
    console.log('LoadList');
    // this.fulfillmentFacade.loadList();
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
