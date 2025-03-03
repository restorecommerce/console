import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { ModeType } from '@console-core/graphql';
import { ShopFacade } from '@console-core/state';
import { IShop } from '@console-core/types';

import { ShopDomainModalComponent } from './shop-domain-modal.component';

@Component({
  selector: 'app-module-management-shop-view-details',
  templateUrl: './shop-view-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopViewDetailComponent implements OnInit {
  @Input({
    required: true,
  })
  vm!: {
    id: string;
    shop: IShop;
  };

  domainLayer!: LayerRef;

  constructor(
    private readonly layerService: LayerService,
    private readonly shopFacade: ShopFacade
  ) {}

  ngOnInit(): void {
    this.domainLayer = this.layerService.create(ShopDomainModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  onAddDomain(shop: IShop) {
    this.domainLayer
      .open({
        data: {
          title: 'Add domain',
        },
      })
      .subscribe((result: { value: string } | undefined) => {
        if (result) {
          this.shopFacade.create({
            items: [
              {
                ...shop,
                domains: [...(shop?.domains || []), result.value],
              },
            ],
            mode: ModeType.Create,
          });
        }
      });
  }

  onEditDomain(shop: IShop, value: string, index: number) {
    this.domainLayer
      .open({
        data: {
          title: 'Edit domain',
          value,
        },
      })
      .subscribe((result: { value: string } | undefined) => {
        if (result) {
          const domains = shop?.domains;
          if (domains) {
            const domainsWithUpdate = domains.map((domain, idx) => {
              return idx === index ? result.value : domain;
            });

            this.shopFacade.update({
              items: [
                {
                  ...shop,
                  domains: domainsWithUpdate,
                },
              ],
              mode: ModeType.Update,
            });
          }
        }
      });
  }
}
