import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ShopFacade } from '@console-core/state';
import { IShop } from '@console-core/types';

interface ISchemaOptions {
  shop: IShop | null;
}

@Injectable({
  providedIn: 'root',
})
export class JssFormService {
  shop: IShop | null = null;

  shopSchema$ = new BehaviorSubject<VCLFormFieldSchemaRoot>(
    this.buildOrganizationSchema({ shop: null })
  );

  private destroy$ = new Subject<void>();

  constructor(private readonly shopFacade: ShopFacade) {
    this.init();
  }

  init() {
    combineLatest({
      shop: this.shopFacade.selected$,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ shop }) => {
        this.shopSchema$.next(this.buildOrganizationSchema({ shop }));
      });
  }

  destroy() {
    this.shopSchema$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  buildOrganizationSchema({ shop }: ISchemaOptions): VCLFormFieldSchemaRoot {
    return {
      type: 'form',
      fields: [
        {
          name: 'shopNumber',
          label: 'Shop number',
          type: 'input',
          ...(shop ? { defaultValue: shop.shopNumber } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'name',
          label: 'Name',
          type: 'input',
          ...(shop ? { defaultValue: shop.name } : {}),
          validators: [Validators.required],
          params: {},
          hints: [
            {
              type: 'error',
              error: 'required',
              message: 'This field is required.',
            },
          ],
        },
        {
          name: 'description',
          label: 'Description',
          type: 'input',
          ...(shop ? { defaultValue: shop.description } : {}),
          params: {},
        },
        {
          type: 'buttons',
          buttons: [
            {
              type: 'button',
              label: 'Cancel',
              action: 'reset',
              class: 'transparent',
            },
            {
              type: 'submit',
              label: 'Save',
            },
          ],
        },
      ],
    };
  }
}
