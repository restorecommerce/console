import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';
import { distinctUntilChanged, filter, map } from 'rxjs';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
} from '@vcl/ng-vcl';

import { FulfillmentViewFacade } from '../../../store';
import { FulfillmentOverviewTabComponent } from '../../components/fulfillment-overview-tab/fulfillment-overview-tab.component';
import { FulfillmentParcelsTabComponent } from '../../components/fulfillment-parcels-tab/fulfillment-parcels-tab.component';
import { FulfillmentStateBadgeComponent } from '../../components/fulfillment-state-badge/fulfillment-state-badge.component';

@Component({
  selector: 'app-module-fulfillment-view',
  templateUrl: './fulfillment-view.component.html',
  imports: [
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    RcResourceDetailComponent,
    FulfillmentOverviewTabComponent,
    FulfillmentParcelsTabComponent,
    FulfillmentStateBadgeComponent,
  ],
  styleUrl: './fulfillment-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FulfillmentViewFacade],
})
export class FulfillmentViewComponent implements OnInit {
  private readonly fulfillmentFacade = inject(FulfillmentViewFacade);
  private readonly route = inject(ActivatedRoute);

  readonly fulfillment = this.fulfillmentFacade.fulfillment;
  readonly hasLabels = this.fulfillmentFacade.hasLabels;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((p) => p.get('id')),
        filter((id): id is string => !!id),
        distinctUntilChanged()
      )
      .subscribe((fulfillmentId) => {
        this.fulfillmentFacade.enterPage(fulfillmentId);
      });
  }

  goBack() {
    // TODO
  }

  editFulfillment() {
    // TODO
  }

  deleteFulfillment() {
    // TODO
  }
}
