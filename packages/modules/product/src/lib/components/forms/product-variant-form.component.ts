import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  template: `
    <vcl-form-control-group>
      <vcl-label>Parent variant</vcl-label>
      <vcl-select>
        <vcl-select-list>
          <vcl-select-list-item value="variant-1"
            >Variant 1</vcl-select-list-item
          >
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Name</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Description</vcl-label>
      <vcl-input-field class="auto-height">
        <textarea
          vclInput
          [autogrow]="true"
          [minRows]="5"
          [maxRows]="10"
        ></textarea>
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Stock Level</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <vcl-form-control-group>
      <vcl-label>Stock Keeping Unit</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>

    <!-- Money section -->
    <app-module-product-price-form />

    <!--  TODO Should be dynamic to accomodate additional taxes -->
    <vcl-form-control-group>
      <vcl-label>Tax Id</vcl-label>
      <vcl-input-field>
        <input vclInput />
      </vcl-input-field>
    </vcl-form-control-group>
  `,
  selector: 'app-module-product-variant-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVariantFormComponent {
  @HostBinding('class') className = 'w-100p';
}
