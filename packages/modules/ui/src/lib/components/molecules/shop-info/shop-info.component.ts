import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IoRestorecommerceShopShop } from '@console-core/graphql';

@Component({
  selector: 'rc-shop-info',
  templateUrl: 'shop-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcShopInfoComponent {
  @Input({ required: true })
  shop!: IoRestorecommerceShopShop;

  @Output() openEditShopModal = new EventEmitter<void>();
}
