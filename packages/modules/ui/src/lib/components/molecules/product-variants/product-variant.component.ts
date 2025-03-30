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
import { FormControl, FormGroup } from '@angular/forms';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { API } from '@console-core/config';
import {
  IIoRestorecommerceImageImage,
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductIndividualProduct,
} from '@console-core/graphql';
import { UploadService } from '@console-core/state';
import { IMeta } from '@console-core/types';

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

  uploadImageFormGroup = new FormGroup({
    fileInputControl: new FormControl(null, []),
  });

  constructor(
    private layerService: LayerService,
    private viewContainerRef: ViewContainerRef,
    private uploadService: UploadService
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

  onUploadFile() {
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

    const fileList = this.uploadImageFormGroup.get('fileInputControl')
      ?.value as unknown as FileList;
    const file = fileList[0];

    const meta: Partial<IMeta> = {
      owners: [
        {
          id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
          value: 'urn:restorecommerce:acs:model:organization.Organization',
          attributes: [
            {
              id: 'urn:restorecommerce:acs:names:ownerInstance',
              value: 'nfuse-shop-000-organization',
              attributes: [],
            },
          ],
        },
      ],
    };

    // Further move this into an action...that would then
    // onload the file, and then do the last step, which is
    //
    this.uploadService.uploadFile(
      file,
      'http://localhost:5000/graphql',
      'public',
      `nfuse-shop/${file.name}`,
      'token',
      meta
    );
  }
}
