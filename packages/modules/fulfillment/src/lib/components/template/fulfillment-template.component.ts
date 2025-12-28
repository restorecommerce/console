import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-fulfillment-template',
  templateUrl: './fulfillment-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentTemplateComponent {}
