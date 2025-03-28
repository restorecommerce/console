import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { API } from '@console-core/config';
import {
  IIoRestorecommerceImageImage,
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductIndividualProduct,
} from '@console-core/graphql';

@Component({
  selector: 'rc-product-variant',
  templateUrl: './product-variant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcProductVariantComponent implements OnInit, AfterViewInit {
  @HostBinding('class') className = 'w-100p';

  @Input({ required: true })
  product!: IoRestorecommerceProductIndividualProduct;

  @Input({ required: true })
  variant!: IIoRestorecommerceProductPhysicalVariant;

  @Output() editVariant =
    new EventEmitter<IIoRestorecommerceProductPhysicalVariant>();

  @Output() deleteVariant = new EventEmitter<string>();

  images!: IIoRestorecommerceImageImage[];

  @ViewChild('tplLayerRef')
  tplLayerRef!: TemplateRef<{ title: string }>;

  tplLayer!: LayerRef;

  constructor(
    private layerService: LayerService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const parentVariant = this.product.physical?.templates?.find(
      (tmpl) => tmpl.id === this.variant.parentVariantId
    );

    const variantImages = this.variant.images || [];
    const baseParentVariantImages = parentVariant?.images || [];

    this.images = (
      variantImages.length
        ? variantImages
        : baseParentVariantImages.concat(variantImages)
    ).map((img) => ({
      ...img,
      url: `${API.domains.bucketDomain}${img.url}`,
    }));
  }

  ngAfterViewInit(): void {
    this.tplLayer = this.layerService.createTemplateLayer(
      this.tplLayerRef,
      this.viewContainerRef
    );
  }

  onAddFile() {
    /*
    const file = {
      id: '',
      filename: '',
      contentType: '',
      tags: [],
      caption: '',
      url: '',
      thumbnail: {
        id: '',
        url: '',
        width: '',
        length: '',
        index: '',
        caption: '',
        contentType: '',
        filename: '',
        height: '',
        tags: [],
      },
    };
    */
    console.log('Add file');
  }
}
