import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-template',
  templateUrl: './product-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcProductTemplateComponent {
  @HostBinding('class') className = 'w-100p';

  @Input({ required: true })
  template!: IIoRestorecommerceProductPhysicalVariant;

  @Output() editTemplate =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteTemplate = new EventEmitter<string>();
}
