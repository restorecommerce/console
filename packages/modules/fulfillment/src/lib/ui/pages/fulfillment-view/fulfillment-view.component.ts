import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RcResourceDetailComponent } from '@console/rc-ui';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
  VCLBadgeComponent,
  VCLIconComponent,
} from '@vcl/ng-vcl';

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
    VCLBadgeComponent,
  ],
  styleUrl: './fulfillment-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [OrderViewFacade],
})
export class FulfillmentViewComponent implements OnInit {
  // private readonly orderFacade = inject(OrderViewFacade);
  // private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('Onint');
    // this.route.paramMap
    //   .pipe(
    //     map((p) => p.get('id')),
    //     filter((id): id is string => !!id),
    //     distinctUntilChanged()
    //   )
    //   .subscribe((orderId) => {
    //     this.orderFacade.enterPage(orderId);
    //   });
  }

  goBack() {
    // TODO
  }

  editOrder() {
    // TODO
  }

  deleteOrder() {
    // TODO
  }
}
