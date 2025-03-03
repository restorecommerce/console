import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IShop } from '@console-core/types';

@Component({
  selector: 'app-module-management-shop-view-details',
  templateUrl: './shop-view-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopViewDetailComponent {
  @Input({
    required: true,
  })
  vm!: {
    id: string;
    shop: IShop;
  };

  onAddDomain() {
    // TODO Add domain
  }
}
