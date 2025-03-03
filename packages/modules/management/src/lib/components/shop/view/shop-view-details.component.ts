import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType, LayerRef, LayerService } from '@vcl/ng-vcl';

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
export class ShopViewDetailComponent implements OnInit, OnDestroy {
  @Input({
    required: true,
  })
  vm!: {
    id: string;
    shop: IShop;
  };

  domainLayer!: LayerRef;

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly layerService: LayerService,
    private readonly alertService: AlertService,
    private readonly shopFacade: ShopFacade
  ) {}

  ngOnInit(): void {
    this.domainLayer = this.layerService.create(ShopDomainModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
          this.shopFacade.update({
            items: [
              {
                ...shop,
                domains: [...(shop?.domains || []), result.value],
              },
            ],
            mode: ModeType.Update,
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

  onDeleteDomain(shop: IShop, index: number) {
    this.subscriptions.sink = this.alertService
      .open({
        text: 'Do you really want to delete the domain?',
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: 'Delete domain',
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (result.action !== 'confirm') {
          return;
        }

        const domains = shop?.domains;
        if (domains) {
          const domainsWithUpdate = domains.filter((_, idx) => idx !== index);

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
      });
  }
}
