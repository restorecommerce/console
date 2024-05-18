import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { IIoRestorecommerceImageImage } from '@console-core/graphql';

@Component({
  selector: 'rc-product-images',
  templateUrl: 'product-images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcProductImagesComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  images!: IIoRestorecommerceImageImage[];

  selectedImage!: IIoRestorecommerceImageImage;

  loadedImagesCount = 0;
  totalImagesCount = 0;
  isLoading = true;
  isError = false;

  constructor(private loadingBar: LoadingBarService) {}

  ngOnInit(): void {
    this.totalImagesCount = this.images.length;
    this.selectedImage = this.images[0];
    this.loadingBar.useRef().start();
  }

  ngOnDestroy(): void {
    this.loadingBar.useRef().complete();
  }

  onSelectImage(image: IIoRestorecommerceImageImage) {
    this.selectedImage = image;
  }

  onImageLoad() {
    this.loadedImagesCount += 1;
    if (this.loadedImagesCount === this.totalImagesCount) {
      this.isLoading = false;
      this.loadingBar.useRef().complete();
    }
  }

  onImageError() {
    this.isError = true;
    this.isLoading = false;
    this.loadingBar.useRef().complete();
  }
}
