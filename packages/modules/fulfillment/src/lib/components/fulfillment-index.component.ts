import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-module-fulfillment',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class FulfillmentIndexComponent implements OnInit {
  ngOnInit(): void {
    console.log('***Loading Fulfilment route');
  }
}
