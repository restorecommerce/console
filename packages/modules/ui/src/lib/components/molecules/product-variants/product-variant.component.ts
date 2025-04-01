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
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { filter, map, Observable, tap } from 'rxjs';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { API } from '@console-core/config';
import {
  IIoRestorecommerceFileFile,
  IIoRestorecommerceImageImage,
  IIoRestorecommerceProductPhysicalVariant,
  IIoRestorecommerceProductProduct,
  ModeType,
} from '@console-core/graphql';
import { ObjectUploadFacade, ProductFacade } from '@console-core/state';
import { EActionStatus, IProduct } from '@console-core/types';

@Component({
  selector: 'rc-product-variant',
  templateUrl: './product-variant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcProductVariantComponent implements OnInit, AfterViewInit {
  @HostBinding('class') className = 'w-100p';

  @Input({ required: true })
  product!: IProduct;

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

  uploadState$ = this.objectUploadFacade.actionStatus$;
  EActionStatus = EActionStatus;

  fileForm!: FormGroup;
  fileData$!: Observable<{
    filename: string;
    url: string;
  }>;

  constructor(
    private fb: FormBuilder,
    private layerService: LayerService,
    private viewContainerRef: ViewContainerRef,
    private objectUploadFacade: ObjectUploadFacade,
    private readonly productFacade: ProductFacade
  ) {}

  ngOnInit(): void {
    const parentVariant = this.product.product.physical?.templates?.find(
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

    this.fileForm = this.fb.group({
      filename: [''],
      contentType: [''],
      tags: [[]],
      caption: [''],
      url: [''],
    });

    // Select from store
    this.fileData$ = this.objectUploadFacade.uploadedObject$.pipe(
      filter((data) => !!data),
      map((data) => ({
        filename: data.url.split('/').pop() || '',
        url: data.url.slice(1),
      })),
      tap((data) => this.fileForm.patchValue(data))
    );
  }

  ngAfterViewInit(): void {
    this.tplLayer = this.layerService.createTemplateLayer(
      this.tplLayerRef,
      this.viewContainerRef
    );

    this.fileData$.subscribe();
  }

  onUploadFile() {
    const fileList = this.uploadImageFormGroup.get('fileInputControl')
      ?.value as unknown as FileList;
    const file = fileList[0];
    this.objectUploadFacade.upload(file);
  }

  onSaveUploadedURL() {
    const file: IIoRestorecommerceFileFile = {
      ...this.fileForm.value,
    };

    const variantWithNewFile = {
      ...this.variant,
      files: [...(this.variant.files || []), file],
    };

    const productVariant = this.product.product.physical?.variants || [];

    const updatedProductVariants = productVariant.map((variant) =>
      variant.id === variantWithNewFile.id ? variantWithNewFile : variant
    );

    const product: IIoRestorecommerceProductProduct = {
      ...this.product,
      product: {
        physical: {
          templates: [...(this.product.product.physical?.templates || [])],
          variants: updatedProductVariants,
        },
      },
    };

    this.productFacade.update({ items: [product], mode: ModeType.Update });
    this.objectUploadFacade.uploadCompleted();
  }
}
