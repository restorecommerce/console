import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { AlertService, AlertType, LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import {
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IProduct } from '@console-core/types';

import { ProductTemplateEditComponent } from './product-template-modal.component';
import { ProductVariantEditComponent } from './product-variant-modal.component';

@Component({
  selector: 'app-module-product-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-product-view
        (addVariant)="onAddVariant(vm.product)"
        (editVariant)="onEditVariant($event, vm.product)"
        (deleteVariant)="onDeleteVariant($event, vm.product)"
        (addTemplate)="onAddTemplate(vm.product)"
        (editTemplate)="onEditTemplate($event, vm.product)"
        (deleteTemplate)="onDeleteTemplate($event, vm.product)"
        [product]="vm.product"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductViewComponent implements OnInit, OnDestroy {
  addVariantLayer!: LayerRef;
  addTemplateLayer!: LayerRef;

  private readonly subscriptions = new SubSink();

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.productFacade.setSelectedId(id);
        this.productFacade.readOneById({ id });
      })
    ),
    product: this.productFacade.selected$.pipe(
      tap((product) => {
        if (!product) {
          this.productFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private readonly alertService: AlertService,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {
    this.addVariantLayer = this.layerService.create(
      ProductVariantEditComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );

    this.addTemplateLayer = this.layerService.create(
      ProductTemplateEditComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.addVariantLayer?.destroy();
  }

  onAddVariant(product: IProduct) {
    this.subscriptions.sink = this.addVariantLayer
      .open({
        data: {
          title: `Add product variant`,
          product,
        },
      })
      .subscribe();
  }

  onEditVariant(
    variant: IIoRestorecommerceProductPhysicalVariant,
    product: IProduct
  ) {
    this.subscriptions.sink = this.addVariantLayer
      .open({
        data: {
          title: `Edit product variant`,
          product,
          variant,
        },
      })
      .subscribe();
  }

  onDeleteVariant(variantId: string, product: IProduct) {
    const variants = product.product.physical?.variants;

    if (variants) {
      const variant = product.product.physical?.variants?.find(
        (variant) => variant.id === variantId
      );

      const updatedVariants = variants.filter(
        (variant) => variant.id !== variantId
      );

      if (variant) {
        this.subscriptions.sink = this.alertService
          .open({
            text: `Do you really want to delete ${variant.name}?`,
            type: AlertType.Question,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonLabel: 'Cancel',
            cancelButtonClass: 'transparent',
            confirmButtonLabel: `Delete ${variant.name}`,
            confirmButtonClass: 'button',
          })
          .subscribe((result) => {
            if (result.action !== 'confirm') {
              return;
            }

            const updatedProduct: IProduct = {
              ...product,
              product: {
                ...product.product,
                physical: {
                  variants: updatedVariants,
                },
              },
            };

            this.productFacade.update({
              items: [updatedProduct],
              mode: ModeType.Update,
            });
          });
      }
    }
  }

  onAddTemplate(product: IProduct) {
    this.subscriptions.sink = this.addTemplateLayer
      .open({
        data: {
          title: `Add product base template`,
          product,
        },
      })
      .subscribe();
  }

  onEditTemplate(
    template: IIoRestorecommerceProductPhysicalVariant,
    product: IProduct
  ) {
    this.subscriptions.sink = this.addTemplateLayer
      .open({
        data: {
          title: `Edit product base template`,
          product,
          template,
        },
      })
      .subscribe();
  }

  onDeleteTemplate(templateId: string, product: IProduct) {
    const templates = product.product.physical?.templates;

    if (templates) {
      const template = product.product.physical?.templates?.find(
        (template) => template.id === templateId
      );

      const updatedTemplates = templates.filter(
        (template) => template.id !== templateId
      );

      if (template) {
        this.subscriptions.sink = this.alertService
          .open({
            text: `Do you really want to delete ${template.name}?`,
            type: AlertType.Question,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonLabel: 'Cancel',
            cancelButtonClass: 'transparent',
            confirmButtonLabel: `Delete ${template.name}`,
            confirmButtonClass: 'button',
          })
          .subscribe((result) => {
            if (result.action !== 'confirm') {
              return;
            }

            const updatedProduct: IProduct = {
              ...product,
              product: {
                ...product.product,
                physical: {
                  templates: updatedTemplates,
                },
              },
            };

            this.productFacade.update({
              items: [updatedProduct],
              mode: ModeType.Update,
            });
          });
      }
    }
  }
}
