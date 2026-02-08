import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
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
  VCLIconComponent,
} from '@vcl/ng-vcl';

import { FulfillmentViewFacade } from '../../../store';
import { FulfillmentDataListItemComponent } from '../../components/fulfillment-data-list-item/fulfillment-data-list-item.component';
import { FulfillmentOverviewTab } from '../../components/fulfillment-overview-tab/fulfillment-overview-tab.component';
import { FulfillmentStateBadgeComponent } from '../../components/fulfillment-state-badge/fulfillment-state-badge.component';

@Component({
  selector: 'app-module-fulfillment-view',
  templateUrl: './fulfillment-view.component.html',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    VCLIconComponent,
    RcResourceDetailComponent,
    FulfillmentOverviewTab,
    FulfillmentStateBadgeComponent,
    FulfillmentDataListItemComponent,
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
