import { DatePipe, JsonPipe } from '@angular/common';
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
  VCLBadgeComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

import { OrderViewFacade } from '../../../store';

@Component({
  selector: 'app-module-order-view',
  templateUrl: './order-view.component.html',
  imports: [
    DatePipe,
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    RcResourceDetailComponent,
    VCLBadgeComponent,
    VCLButtonComponent,
  ],
  styleUrl: './order-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderViewFacade],
})
export class OrderViewComponent implements OnInit {
  private readonly orderFacade = inject(OrderViewFacade);
  private readonly route = inject(ActivatedRoute);

  readonly order = this.orderFacade.order;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((p) => p.get('id')),
        filter((id): id is string => !!id),
        distinctUntilChanged()
      )
      .subscribe((orderId) => {
        console.log('OrderID', orderId);
        this.orderFacade.enterPage(orderId);
      });
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
