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
  IIoRestorecommerceImageImage,
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductIndividualProduct,
} from '@console-core/graphql';
import { ObjectUploadFacade } from '@console-core/state';
import { EActionStatus } from '@console-core/types';

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
    private objectUploadFacade: ObjectUploadFacade
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
    this.objectUploadFacade.upload(file);
  }
}
