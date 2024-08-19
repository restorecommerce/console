import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ModeType } from '@console-core/graphql';
import { ProductFacade } from '@console-core/state';
@Component({
  template: `
    <form
      [formGroup]="productForm"
      (ngSubmit)="onSubmit()"
    >
      <vcl-form-control-group>
        <vcl-label>Name</vcl-label>
        <vcl-input-field>
          <input
            vclInput
            formControlName="name"
          />
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Description</vcl-label>
        <vcl-input-field class="auto-height">
          <textarea
            vclInput
            formControlName="description"
            [autogrow]="true"
            [minRows]="5"
            [maxRows]="10"
          ></textarea>
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Manufacturer</vcl-label>
        <vcl-select>
          <vcl-select-list formControlName="manufacturerId">
            <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
            <vcl-select-list-item value="manu-a">
              Manufacturer A
            </vcl-select-list-item>
            <vcl-select-list-item value="manu-b">
              Manufacturer B
            </vcl-select-list-item>
            <vcl-select-list-item value="manu-c">
              Manufacturer C
            </vcl-select-list-item>
          </vcl-select-list>
        </vcl-select>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Origin country</vcl-label>
        <vcl-select>
          <vcl-select-list formControlName="originCountryId">
            <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
            <vcl-select-list-item value="germany">
              German
            </vcl-select-list-item>
            <vcl-select-list-item value="france"> France </vcl-select-list-item>
          </vcl-select-list>
        </vcl-select>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Taric code</vcl-label>
        <vcl-input-field>
          <input
            vclInput
            formControlName="taricCode"
          />
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Prototype</vcl-label>
        <vcl-select>
          <vcl-select-list formControlName="prototypeId">
            <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
            <vcl-select-list-item value="proto-a">
              Prototype A
            </vcl-select-list-item>
            <vcl-select-list-item value="proto-b">
              Prototype B
            </vcl-select-list-item>
          </vcl-select-list>
        </vcl-select>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Category</vcl-label>
        <vcl-select>
          <vcl-select-list formControlName="categoryId">
            <!-- <vcl-select-list-header>Europe</vcl-select-list-header> -->
            <vcl-select-list-item value="cat-a">
              Category A
            </vcl-select-list-item>
            <vcl-select-list-item value="cat-b">
              Category B
            </vcl-select-list-item>
          </vcl-select-list>
        </vcl-select>
      </vcl-form-control-group>

      <!--  TODO Should be dynamic to accomodate additional taxes -->
      <vcl-form-control-group>
        <vcl-label>Tax Id</vcl-label>
        <vcl-input-field>
          <input
            vclInput
            formControlName="taxIds"
          />
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Global trade item number</vcl-label>
        <vcl-input-field>
          <input
            vclInput
            formControlName="gtin"
          />
        </vcl-input-field>
      </vcl-form-control-group>

      <vcl-form-control-group>
        <vcl-label>Offerings</vcl-label>
        <vcl-select>
          <vcl-select-list>
            <vcl-select-list-item value="physical">
              Physical
            </vcl-select-list-item>
            <vcl-select-list-item value="virtual">
              Virtual
            </vcl-select-list-item>
            <vcl-select-list-item value="service">
              Service
            </vcl-select-list-item>
          </vcl-select-list>
        </vcl-select>
      </vcl-form-control-group>

      <div class="row justify-content-end mt-2">
        <div class="loose-button-group">
          <button
            vcl-button
            type="button"
            class="transparent"
          >
            Cancel
          </button>

          <button
            vcl-button
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  `,
  selector: 'app-module-product-creation-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreationFormComponent {
  productForm = new FormGroup({
    name: new FormControl('Juju toys bello'),
    description: new FormControl(
      'A simple toy that you can say to what you want'
    ),
    manufacturerId: new FormControl('manu-b'),
    originCountryId: new FormControl('germany'),
    taricCode: new FormControl('12345678901'),
    prototypeId: new FormControl('proto-b'),
    categoryId: new FormControl('cat-b'),
    gtin: new FormControl('01234567890123'),
    // taxIds: new FormControl('germany-standard-rate'), // TODO This would eventually be an array.
  });

  constructor(private readonly productFacade: ProductFacade) {}

  onSubmit() {
    if (this.productForm.valid) {
      this.productFacade.create({
        mode: ModeType.Create,
        items: [
          {
            product: this.productForm.value,
            meta: {
              owners: [
                {
                  id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
                  value:
                    'urn:restorecommerce:acs:model:organization.Organization',
                  attributes: [
                    {
                      id: 'urn:restorecommerce:acs:names:ownerInstance',
                      value: 'nfuse-shop-000-organization',
                    },
                  ],
                },
              ],
            },
          },
        ],
      });
    }
  }
}
