import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

@Component({
  selector: 'rc-product-templates',
  templateUrl: './product-templates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcProductTemplatesComponent {
  @Input({ required: true })
  templates!: IIoRestorecommerceProductPhysicalVariant[];
  @Output() addTemplate = new EventEmitter<void>();

  @Output() editTemplate =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteTemplate = new EventEmitter<string>();
}
